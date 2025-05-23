import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AnalyticsEvents } from '@/constants/analytics';
import { STRING_KEYS } from '@/constants/localization';
import { AppRoute, PortfolioRoute } from '@/constants/routes';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useAppSelectorWithArgs } from '@/hooks/useParameterizedSelector';
import { useShouldShowTriggers } from '@/hooks/useShouldShowTriggers';
import { useStringGetter } from '@/hooks/useStringGetter';

import { AttachedExpandingSection, DetachedSection } from '@/components/ContentSection';
import { ContentSectionHeader } from '@/components/ContentSectionHeader';
import { Icon, IconName } from '@/components/Icon';
import { Link } from '@/components/Link';
import { PositionsTable, PositionsTableColumnKey } from '@/views/tables/PositionsTable';

import { calculateShouldRenderActionsInPositionsTable } from '@/state/accountCalculators';

import { track } from '@/lib/analytics/analytics';
import { isTruthy } from '@/lib/isTruthy';

import { MaybeUnopenedIsolatedPositionsPanel } from '../trade/UnopenedIsolatedPositions';
import { MaybeVaultPositionsPanel } from '../vaults/VaultPositions';

export const Positions = () => {
  const stringGetter = useStringGetter();
  const { isTablet, isNotTablet } = useBreakpoints();
  const navigate = useNavigate();

  const shouldRenderTriggers = useShouldShowTriggers();
  const shouldRenderActions = useAppSelectorWithArgs(calculateShouldRenderActionsInPositionsTable);

  const handleViewUnopenedIsolatedOrders = useCallback(() => {
    navigate(`${AppRoute.Portfolio}/${PortfolioRoute.Orders}`, {
      state: { from: AppRoute.Portfolio },
    });
  }, [navigate]);

  const handleViewVault = useCallback(() => {
    track(AnalyticsEvents.ClickViewVaultFromPositionCard());
    navigate(`${AppRoute.Vault}`, {
      state: { from: AppRoute.Portfolio },
    });
  }, [navigate]);

  return (
    <>
      <AttachedExpandingSection tw="mb-1">
        {isNotTablet && (
          <ContentSectionHeader title={stringGetter({ key: STRING_KEYS.POSITIONS })} />
        )}

        <PositionsTable
          columnKeys={
            isTablet
              ? [
                  PositionsTableColumnKey.Details,
                  PositionsTableColumnKey.IndexEntry,
                  PositionsTableColumnKey.PnL,
                ]
              : [
                  PositionsTableColumnKey.Market,
                  PositionsTableColumnKey.Leverage,
                  PositionsTableColumnKey.Type,
                  PositionsTableColumnKey.Size,
                  PositionsTableColumnKey.Value,
                  PositionsTableColumnKey.PnL,
                  PositionsTableColumnKey.Margin,
                  PositionsTableColumnKey.AverageOpen,
                  PositionsTableColumnKey.Oracle,
                  PositionsTableColumnKey.Liquidation,
                  PositionsTableColumnKey.NetFunding,
                  shouldRenderTriggers && PositionsTableColumnKey.Triggers,
                  shouldRenderActions && PositionsTableColumnKey.Actions,
                ].filter(isTruthy)
          }
          currentRoute={`${AppRoute.Portfolio}/${PortfolioRoute.Positions}`}
          withOuterBorder={isNotTablet}
          showClosePositionAction={shouldRenderActions}
          navigateToOrders={() =>
            navigate(`${AppRoute.Portfolio}/${PortfolioRoute.Orders}`, {
              state: { from: AppRoute.Portfolio },
            })
          }
        />
      </AttachedExpandingSection>

      <DetachedSection>
        <$MaybeUnopenedIsolatedPositionsPanel
          header={
            <ContentSectionHeader
              title={stringGetter({ key: STRING_KEYS.UNOPENED_ISOLATED_POSITIONS })}
            />
          }
          onViewOrders={handleViewUnopenedIsolatedOrders}
        />
      </DetachedSection>
      <DetachedSection>
        <$MaybeVaultPositionsPanel
          header={
            <ContentSectionHeader
              title={stringGetter({ key: STRING_KEYS.VAULTS })}
              slotRight={
                isTablet && (
                  <Link onClick={handleViewVault} isAccent tw="font-small-book">
                    {stringGetter({ key: STRING_KEYS.VIEW_VAULT })}{' '}
                    <Icon iconName={IconName.Arrow} />
                  </Link>
                )
              }
            />
          }
          onViewVault={handleViewVault}
        />
      </DetachedSection>
    </>
  );
};
const $MaybeUnopenedIsolatedPositionsPanel = styled(MaybeUnopenedIsolatedPositionsPanel)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  > div {
    padding-left: 1rem;
  }
`;

const $MaybeVaultPositionsPanel = styled(MaybeVaultPositionsPanel)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  > div {
    padding-left: 1rem;
  }
`;
