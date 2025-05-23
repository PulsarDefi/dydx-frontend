import { type ElementType } from 'react';

import styled from 'styled-components';

import {
  AddressConnectorIcon,
  AppleIcon,
  ArrowIcon,
  Bar3Icon,
  BellIcon,
  BellStrokeIcon,
  BoxCloseIcon,
  CalculatorIcon,
  CaretIcon,
  CautionCircleIcon,
  CautionCircleStrokeIcon,
  ChatIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CloseIcon,
  CoinMarketCapIcon,
  CoinsIcon,
  CommentIcon,
  CopyIcon,
  CurrencySignIcon,
  DepositIcon,
  DepthChartIcon,
  DiscordIcon,
  DownloadIcon,
  EarthIcon,
  ErrorExclamationIcon,
  EtherscanIcon,
  ExportKeysIcon,
  FastForwardIcon,
  FeedbackIcon,
  FileIcon,
  FundingChartIcon,
  FunkitInstantIcon,
  FunkitStandardIcon,
  GearIcon,
  GiftboxIcon,
  GooglePlayIcon,
  GovernanceIcon,
  HelpCircleIcon,
  HideIcon,
  HistoryIcon,
  LeaderboardIcon,
  LightningIcon,
  LinkOutIcon,
  ListIcon,
  LockIcon,
  MarketsIcon,
  MenuIcon,
  MigrateIcon,
  MintscanIcon,
  MobileIcon,
  MoneyIcon,
  MoonIcon,
  OrderCanceledIcon,
  OrderFilledIcon,
  OrderOpenIcon,
  OrderPartiallyFilledIcon,
  OrderPendingIcon,
  OrderUntriggeredIcon,
  OrderbookIcon,
  OverviewIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  PositionPartialIcon,
  PositionsIcon,
  PriceChartIcon,
  PrivacyIcon,
  QrIcon,
  QuestionMarkIcon,
  RefreshIcon,
  RewardStarIcon,
  RocketIcon,
  RoundedArrowIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  ShieldIcon,
  ShowIcon,
  SocialXIcon,
  SparklesIcon,
  SpeechBubbleIcon,
  StarIcon,
  SuccessCircleIcon,
  SunIcon,
  SwitchIcon,
  TerminalIcon,
  TogglesMenuIcon,
  TokenIcon,
  TradeIcon,
  TransferIcon,
  TranslateIcon,
  TriangleIcon,
  TryAgainIcon,
  ViewfinderIcon,
  WarningIcon,
  WebsiteIcon,
  WhitepaperIcon,
  WithdrawIcon,
} from '@/icons';
import { ChaosLabsIcon } from '@/icons/chaos-labs';
import { LogoShortIcon } from '@/icons/logo-short';
import UsdcIcon from '@/icons/usdc.svg';

export enum IconName {
  AddressConnector = 'AddressConnector',
  Apple = 'Apple',
  Arrow = 'Arrow',
  Bar3 = 'Bar3',
  Bell = 'Bell',
  BellStroked = 'BellStroked',
  BoxClose = 'BoxClose',
  Calculator = 'Calculator',
  Caret = 'Caret',
  CautionCircle = 'CautionCircle',
  CautionCircleStroked = 'CautionCircleStroked',
  ChaosLabs = 'ChaosLabs',
  Chat = 'Chat',
  Check = 'Check',
  CheckCircle = 'CheckCircle',
  ChevronLeft = 'ChevronLeft',
  ChevronRight = 'ChevronRight',
  Clock = 'Clock',
  Close = 'Close',
  CoinMarketCap = 'CoinMarketCap',
  Coins = 'Coins',
  Comment = 'Comment',
  Copy = 'Copy',
  CurrencySign = 'CurrencySign',
  Deposit = 'Deposit',
  DepthChart = 'DepthChart',
  Discord = 'Discord',
  Download = 'Download',
  Earth = 'Earth',
  Etherscan = 'Etherscan',
  ErrorExclamation = 'ErrorExclamation',
  ExportKeys = 'ExportKeys',
  FastForward = 'FastForward',
  Feedback = 'Feedback',
  File = 'File',
  FundingChart = 'FundingChart',
  FunkitInstant = 'FunkitInstant',
  FunkitStandard = 'FunkitStandard',
  Gear = 'Gear',
  Giftbox = 'Giftbox',
  GooglePlay = 'GooglePlay',
  Governance = 'Governance',
  HelpCircle = 'HelpCircle',
  Hide = 'Hide',
  History = 'History',
  Leaderboard = 'Leaderboard',
  Lightning = 'Lightning',
  LinkOut = 'LinkOut',
  List = 'List',
  Lock = 'Lock',
  LogoShort = 'LogoShort',
  Markets = 'Markets',
  Menu = 'Menu',
  Migrate = 'Migrate',
  Mintscan = 'Mintscan',
  Mobile = 'Mobile',
  Money = 'Money',
  Moon = 'Moon',
  Onboarding = 'Onboarding',
  Orderbook = 'OrderbookIcon',
  OrderCanceled = 'OrderCanceled',
  OrderFilled = 'OrderFilled',
  OrderOpen = 'OrderOpen',
  OrderPartiallyFilled = 'OrderPartiallyFilled',
  OrderPending = 'OrderPending',
  OrderUntriggered = 'OrderUntriggered',
  Overview = 'Overview',
  Pencil = 'Pencil',
  Play = 'Play',
  Plus = 'Plus',
  PositionPartial = 'PositionPartial',
  Positions = 'Positions',
  PriceChart = 'PriceChart',
  Privacy = 'Privacy',
  Qr = 'Qr',
  QuestionMark = 'QuestionMark',
  Refresh = 'Refresh',
  RewardStar = 'RewardStar',
  Rocket = 'Rocket',
  RoundedArrow = 'RoundedArrow',
  Search = 'Search',
  Send = 'Send',
  Settings = 'Settings',
  Share = 'Share',
  Shield = 'Shield',
  Show = 'Show',
  Sparkles = 'Sparkles',
  SpeechBubble = 'SpeechBubble',
  Star = 'Star',
  SuccessCircle = 'SuccessCircle',
  Sun = 'Sun',
  Switch = 'Switch',
  Terminal = 'Terminal',
  TogglesMenu = 'TogglesMenu',
  Token = 'Token',
  Trade = 'Trade',
  Transfer = 'Transfer',
  Translate = 'Translate',
  Triangle = 'Triangle',
  TryAgain = 'TryAgain',
  Usdc = 'Usdc',
  Viewfinder = 'Viewfinder',
  Warning = 'Warning',
  Website = 'Website',
  Whitepaper = 'Whitepaper',
  Withdraw = 'Withdraw',
  SocialX = 'SocialX',
}

const icons = {
  [IconName.AddressConnector]: AddressConnectorIcon,
  [IconName.Apple]: AppleIcon,
  [IconName.Arrow]: ArrowIcon,
  [IconName.Bar3]: Bar3Icon,
  [IconName.Bell]: BellIcon,
  [IconName.BellStroked]: BellStrokeIcon,
  [IconName.BoxClose]: BoxCloseIcon,
  [IconName.Calculator]: CalculatorIcon,
  [IconName.Caret]: CaretIcon,
  [IconName.CautionCircle]: CautionCircleIcon,
  [IconName.CautionCircleStroked]: CautionCircleStrokeIcon,
  [IconName.ChaosLabs]: ChaosLabsIcon,
  [IconName.Chat]: ChatIcon,
  [IconName.Check]: CheckIcon,
  [IconName.CheckCircle]: CheckCircleIcon,
  [IconName.ChevronLeft]: ChevronLeftIcon,
  [IconName.ChevronRight]: ChevronRightIcon,
  [IconName.Clock]: ClockIcon,
  [IconName.Close]: CloseIcon,
  [IconName.CoinMarketCap]: CoinMarketCapIcon,
  [IconName.Coins]: CoinsIcon,
  [IconName.Comment]: CommentIcon,
  [IconName.Copy]: CopyIcon,
  [IconName.CurrencySign]: CurrencySignIcon,
  [IconName.Deposit]: DepositIcon,
  [IconName.DepthChart]: DepthChartIcon,
  [IconName.Discord]: DiscordIcon,
  [IconName.Download]: DownloadIcon,
  [IconName.Earth]: EarthIcon,
  [IconName.ErrorExclamation]: ErrorExclamationIcon,
  [IconName.Etherscan]: EtherscanIcon,
  [IconName.ExportKeys]: ExportKeysIcon,
  [IconName.FastForward]: FastForwardIcon,
  [IconName.Feedback]: FeedbackIcon,
  [IconName.File]: FileIcon,
  [IconName.FundingChart]: FundingChartIcon,
  [IconName.FunkitInstant]: FunkitInstantIcon,
  [IconName.FunkitStandard]: FunkitStandardIcon,
  [IconName.Gear]: GearIcon,
  [IconName.Giftbox]: GiftboxIcon,
  [IconName.GooglePlay]: GooglePlayIcon,
  [IconName.Governance]: GovernanceIcon,
  [IconName.HelpCircle]: HelpCircleIcon,
  [IconName.Hide]: HideIcon,
  [IconName.History]: HistoryIcon,
  [IconName.Leaderboard]: LeaderboardIcon,
  [IconName.Lightning]: LightningIcon,
  [IconName.LinkOut]: LinkOutIcon,
  [IconName.List]: ListIcon,
  [IconName.Lock]: LockIcon,
  [IconName.LogoShort]: LogoShortIcon,
  [IconName.Markets]: MarketsIcon,
  [IconName.Menu]: MenuIcon,
  [IconName.Migrate]: MigrateIcon,
  [IconName.Mintscan]: MintscanIcon,
  [IconName.Mobile]: MobileIcon,
  [IconName.Money]: MoneyIcon,
  [IconName.Moon]: MoonIcon,
  [IconName.Orderbook]: OrderbookIcon,
  [IconName.OrderCanceled]: OrderCanceledIcon,
  [IconName.OrderFilled]: OrderFilledIcon,
  [IconName.OrderOpen]: OrderOpenIcon,
  [IconName.OrderPartiallyFilled]: OrderPartiallyFilledIcon,
  [IconName.OrderPending]: OrderPendingIcon,
  [IconName.OrderUntriggered]: OrderUntriggeredIcon,
  [IconName.Overview]: OverviewIcon,
  [IconName.Pencil]: PencilIcon,
  [IconName.Play]: PlayIcon,
  [IconName.Plus]: PlusIcon,
  [IconName.PositionPartial]: PositionPartialIcon,
  [IconName.Positions]: PositionsIcon,
  [IconName.PriceChart]: PriceChartIcon,
  [IconName.Privacy]: PrivacyIcon,
  [IconName.Qr]: QrIcon,
  [IconName.QuestionMark]: QuestionMarkIcon,
  [IconName.Refresh]: RefreshIcon,
  [IconName.RewardStar]: RewardStarIcon,
  [IconName.Rocket]: RocketIcon,
  [IconName.RoundedArrow]: RoundedArrowIcon,
  [IconName.Search]: SearchIcon,
  [IconName.Send]: SendIcon,
  [IconName.Settings]: SettingsIcon,
  [IconName.Share]: ShareIcon,
  [IconName.Shield]: ShieldIcon,
  [IconName.Show]: ShowIcon,
  [IconName.Sparkles]: SparklesIcon,
  [IconName.SpeechBubble]: SpeechBubbleIcon,
  [IconName.Star]: StarIcon,
  [IconName.SuccessCircle]: SuccessCircleIcon,
  [IconName.Sun]: SunIcon,
  [IconName.Switch]: SwitchIcon,
  [IconName.Terminal]: TerminalIcon,
  [IconName.TogglesMenu]: TogglesMenuIcon,
  [IconName.Token]: TokenIcon,
  [IconName.Trade]: TradeIcon,
  [IconName.Transfer]: TransferIcon,
  [IconName.Translate]: TranslateIcon,
  [IconName.Triangle]: TriangleIcon,
  [IconName.TryAgain]: TryAgainIcon,
  [IconName.Usdc]: UsdcIcon,
  [IconName.Viewfinder]: ViewfinderIcon,
  [IconName.Warning]: WarningIcon,
  [IconName.Website]: WebsiteIcon,
  [IconName.Whitepaper]: WhitepaperIcon,
  [IconName.Withdraw]: WithdrawIcon,
  [IconName.SocialX]: SocialXIcon,
} as Record<IconName, ElementType>;

type ElementProps = {
  iconName?: IconName;
  iconComponent?: ElementType;
};

type StyleProps = {
  className?: string;
  size?: string;
};

export const Icon = styled(
  ({
    iconName,
    iconComponent: Component = iconName && icons[iconName],
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    size,
    ...props
  }: ElementProps & StyleProps) =>
    Component ? <Component className={className} {...props} /> : null
)`
  --icon-size: ${({ size }) => size ?? ''};
  width: var(--icon-size, 1em);
  height: var(--icon-size, 1em);
  min-width: var(--icon-size, 1em);
  min-height: var(--icon-size, 1em);
`;
