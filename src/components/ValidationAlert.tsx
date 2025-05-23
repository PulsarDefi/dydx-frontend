import { ErrorFormat, ErrorParam, ErrorType, ValidationError } from '@/bonsai/lib/validationErrors';
import { mapValues } from 'lodash';
import tw from 'twin.macro';

import { AlertType } from '@/constants/alerts';
import { STRING_KEYS } from '@/constants/localization';
import { LINKS_CONFIG_MAP } from '@/constants/networks';

import { useStringGetter } from '@/hooks/useStringGetter';

import { getSelectedDydxChainId } from '@/state/appSelectors';
import { useAppSelector } from '@/state/appTypes';

import { assertNever } from '@/lib/assertNever';

import { AlertMessage } from './AlertMessage';
import { Link } from './Link';
import { Output, OutputType } from './Output';

export const ValidationAlertMessage = ({
  className,
  error,
}: {
  error: ValidationError;
  className?: string;
}) => {
  const stringGetter = useStringGetter();
  const selectedDydxChainId = useAppSelector(getSelectedDydxChainId);
  const links = LINKS_CONFIG_MAP[selectedDydxChainId];

  const ourLink =
    error.resources.learnMoreUrlKey != null ? links[error.resources.learnMoreUrlKey] : undefined;
  return (
    <AlertMessage
      type={error.type === ErrorType.error ? AlertType.Error : AlertType.Warning}
      className={className}
    >
      <span>
        {stringGetter({
          key:
            error.resources.text?.stringKey ??
            error.resources.title?.stringKey ??
            STRING_KEYS.UNKNOWN_ERROR,
          params:
            renderParams({ params: error.resources.text?.params }) ??
            renderParams({ params: error.resources.title?.params }) ??
            {},
        })}
        {ourLink != null ? (
          <>
            {' '}
            <Link tw="inline-block" href={ourLink}>
              {stringGetter({ key: STRING_KEYS.LEARN_MORE })}
            </Link>
          </>
        ) : undefined}
      </span>
    </AlertMessage>
  );
};

export const renderParams = ({ params }: { params?: { [key: string]: ErrorParam } }) => {
  return params != null
    ? mapValues(params, (v) => {
        if (v.format == null || v.format === ErrorFormat.String) {
          return v.value;
        }
        if (v.format === ErrorFormat.Percent) {
          return (
            <$InlineOutput
              value={v.value}
              type={OutputType.SmallPercent}
              fractionDigits={v.decimals}
            />
          );
        }
        if (v.format === ErrorFormat.Size) {
          return (
            <$InlineOutput value={v.value} type={OutputType.Number} fractionDigits={v.decimals} />
          );
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (v.format === ErrorFormat.Price) {
          return (
            <$InlineOutput value={v.value} type={OutputType.Fiat} fractionDigits={v.decimals} />
          );
        }
        assertNever(v.format);
        return null;
      })
    : null;
};

const $InlineOutput = tw(Output)`inline-block text-color-text-2`;
