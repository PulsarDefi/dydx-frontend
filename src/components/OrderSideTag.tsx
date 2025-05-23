import { OrderSide } from '@dydxprotocol/v4-client-js';

import { STRING_KEYS } from '@/constants/localization';
import { IndexerOrderSide } from '@/types/indexer/indexerApiGen';

import { useStringGetter } from '@/hooks/useStringGetter';

import { Tag, TagSign, TagSize, TagType } from './Tag';

type ElementProps = {
  orderSide: OrderSide | IndexerOrderSide;
};

type StyleProps = {
  size?: TagSize;
};

const orderSideTagSign: Record<OrderSide | IndexerOrderSide, TagSign> = {
  [OrderSide.BUY]: TagSign.Positive,
  [OrderSide.SELL]: TagSign.Negative,
};

export const OrderSideTag = ({ size, orderSide }: ElementProps & StyleProps) => {
  const stringGetter = useStringGetter();

  return (
    <Tag size={size} type={TagType.Side} sign={orderSideTagSign[orderSide]}>
      {stringGetter({
        key: {
          [OrderSide.BUY]: STRING_KEYS.BUY,
          [OrderSide.SELL]: STRING_KEYS.SELL,
        }[orderSide],
      })}
    </Tag>
  );
};
