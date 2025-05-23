import React from 'react';

import styled, { css } from 'styled-components';

import { ButtonShape, ButtonSize } from '@/constants/buttons';
import {
  NotificationStatus,
  type Notification as NotificationDataType,
} from '@/constants/notifications';

// eslint-disable-next-line import/no-cycle
import { useNotifications } from '@/hooks/useNotifications';

import { layoutMixins } from '@/styles/layoutMixins';
import { popoverMixins } from '@/styles/popoverMixins';

import { IconName } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { Output, OutputType } from '@/components/Output';

type ElementProps = {
  notification: NotificationDataType;
  onClick?: () => void;
  slotIcon?: React.ReactNode;
  slotTitle?: React.ReactNode;
  slotTitleLeft?: React.ReactNode;
  slotTitleRight?: React.ReactNode;
  slotDescription?: React.ReactNode;
  slotCustomContent?: React.ReactNode;
  slotAction?: React.ReactNode;
  withClose?: boolean;
};

type StyleProps = {
  className?: string;
  isToast?: boolean;
};

export type NotificationProps = ElementProps & StyleProps;

export const Notification = ({
  className,
  isToast,
  notification,
  onClick,
  slotIcon,
  slotTitle,
  slotTitleLeft,
  slotTitleRight,
  slotDescription,
  slotCustomContent,
  slotAction,
  withClose = !isToast,
}: NotificationProps) => {
  const { markCleared, markSeen, getDisplayData } = useNotifications();
  const slotContentOrDescription = slotCustomContent ?? slotDescription;

  return (
    <$Container className={className} isToast={isToast} onClick={onClick}>
      <header tw="row relative gap-0.5">
        {slotTitleLeft ?? (slotIcon && <$Icon>{slotIcon}</$Icon>)}
        <div tw="flex-1 overflow-hidden text-ellipsis text-color-text-2 font-base-medium">
          {slotTitle}
        </div>
        {slotTitleRight}
        {withClose && !isToast && (
          <$ActionItems>
            <Output
              type={OutputType.RelativeTime}
              value={
                getDisplayData(notification)?.updatedTime ??
                notification.timestamps[NotificationStatus.Triggered]
              }
              tw="text-color-text-0"
            />

            {notification.status < NotificationStatus.Seen ? <$UnreadIndicator /> : null}

            {notification.status < NotificationStatus.Cleared ? (
              <$IconButton
                iconName={IconName.Close}
                shape={ButtonShape.Square}
                size={ButtonSize.XSmall}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();

                  if (notification.status < NotificationStatus.Seen) {
                    markSeen(notification);
                  } else if (notification.status < NotificationStatus.Cleared) {
                    markCleared(notification);
                  }
                }}
              />
            ) : null}
          </$ActionItems>
        )}
      </header>
      {slotContentOrDescription && (
        <div tw="mt-0.5 text-color-text-0 font-small-book [white-space:break-spaces]">
          {slotContentOrDescription}
        </div>
      )}
      {slotAction && <div tw="mt-[--action-marginTop] font-small-book">{slotAction}</div>}
    </$Container>
  );
};

const $Container = styled.div<{ isToast?: boolean }>`
  // Params
  --toast-icon-size: 1.75em;
  --relativeTime-backgroundColor: var(--color-layer-2);
  --action-marginTop: 0.5rem;

  // Rules
  ${popoverMixins.popover}
  overflow: visible;
  padding: 1rem 1.25rem;

  ${({ isToast }) =>
    isToast
      ? css`
          padding: 1rem;
          box-shadow:
            0 0 0 var(--border-width) var(--color-border),
            // border
            0 0 0.5rem 0.1rem var(--color-layer-2); // shadow
        `
      : css`
          flex: 1;
          background-color: transparent;
          border-radius: 0;
          backdrop-filter: none;
        `}
`;
const $Icon = styled.div`
  ${layoutMixins.row}
  float: left;

  line-height: 1;
  --asset-icon-size: 1.5rem;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const $ActionItems = styled.div`
  min-width: fit-content;
  padding-left: 0.5rem;
  height: 100%;
  ${layoutMixins.row}
  justify-content: end;
  gap: 0.5rem;

  position: absolute;
  right: 0;
  top: 0;

  background-color: var(--relativeTime-backgroundColor);
  font: var(--font-mini-book);

  display: none;
  z-index: 1;

  ${$Container}:hover & {
    display: flex;
  }
`;

const $UnreadIndicator = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-accent);
  border: 1px solid var(--color-layer-2);
`;
const $IconButton = styled(IconButton)`
  --button-border: none;
  --button-textColor: var(--color-text-0);
  --button-hover-textColor: var(--color-text-1);
`;
