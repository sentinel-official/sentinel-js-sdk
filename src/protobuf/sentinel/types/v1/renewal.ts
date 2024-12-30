/* eslint-disable */

export const protobufPackage = "sentinel.types.v1";

/** Enum for renewal price policies */
export enum RenewalPricePolicy {
  /** RENEWAL_PRICE_POLICY_UNSPECIFIED - Default value, do not renew */
  RENEWAL_PRICE_POLICY_UNSPECIFIED = 0,
  /** RENEWAL_PRICE_POLICY_IF_LESSER - Renew if the current price is lesser than the previous price */
  RENEWAL_PRICE_POLICY_IF_LESSER = 1,
  /** RENEWAL_PRICE_POLICY_IF_LESSER_OR_EQUAL - Renew if the current price is lesser than or equal to the previous price */
  RENEWAL_PRICE_POLICY_IF_LESSER_OR_EQUAL = 2,
  /** RENEWAL_PRICE_POLICY_IF_EQUAL - Renew if the current price is equal to the previous price */
  RENEWAL_PRICE_POLICY_IF_EQUAL = 3,
  /** RENEWAL_PRICE_POLICY_IF_NOT_EQUAL - Renew if the current price is not equal to the previous price */
  RENEWAL_PRICE_POLICY_IF_NOT_EQUAL = 4,
  /** RENEWAL_PRICE_POLICY_IF_GREATER - Renew if the current price is greater than the previous price */
  RENEWAL_PRICE_POLICY_IF_GREATER = 5,
  /** RENEWAL_PRICE_POLICY_IF_GREATER_OR_EQUAL - Renew if the current price is greater than or equal to the previous price */
  RENEWAL_PRICE_POLICY_IF_GREATER_OR_EQUAL = 6,
  /** RENEWAL_PRICE_POLICY_ALWAYS - Always renew */
  RENEWAL_PRICE_POLICY_ALWAYS = 7,
  UNRECOGNIZED = -1,
}

export function renewalPricePolicyFromJSON(object: any): RenewalPricePolicy {
  switch (object) {
    case 0:
    case "RENEWAL_PRICE_POLICY_UNSPECIFIED":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_UNSPECIFIED;
    case 1:
    case "RENEWAL_PRICE_POLICY_IF_LESSER":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_LESSER;
    case 2:
    case "RENEWAL_PRICE_POLICY_IF_LESSER_OR_EQUAL":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_LESSER_OR_EQUAL;
    case 3:
    case "RENEWAL_PRICE_POLICY_IF_EQUAL":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_EQUAL;
    case 4:
    case "RENEWAL_PRICE_POLICY_IF_NOT_EQUAL":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_NOT_EQUAL;
    case 5:
    case "RENEWAL_PRICE_POLICY_IF_GREATER":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_GREATER;
    case 6:
    case "RENEWAL_PRICE_POLICY_IF_GREATER_OR_EQUAL":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_GREATER_OR_EQUAL;
    case 7:
    case "RENEWAL_PRICE_POLICY_ALWAYS":
      return RenewalPricePolicy.RENEWAL_PRICE_POLICY_ALWAYS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RenewalPricePolicy.UNRECOGNIZED;
  }
}

export function renewalPricePolicyToJSON(object: RenewalPricePolicy): string {
  switch (object) {
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_UNSPECIFIED:
      return "RENEWAL_PRICE_POLICY_UNSPECIFIED";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_LESSER:
      return "RENEWAL_PRICE_POLICY_IF_LESSER";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_LESSER_OR_EQUAL:
      return "RENEWAL_PRICE_POLICY_IF_LESSER_OR_EQUAL";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_EQUAL:
      return "RENEWAL_PRICE_POLICY_IF_EQUAL";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_NOT_EQUAL:
      return "RENEWAL_PRICE_POLICY_IF_NOT_EQUAL";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_GREATER:
      return "RENEWAL_PRICE_POLICY_IF_GREATER";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_IF_GREATER_OR_EQUAL:
      return "RENEWAL_PRICE_POLICY_IF_GREATER_OR_EQUAL";
    case RenewalPricePolicy.RENEWAL_PRICE_POLICY_ALWAYS:
      return "RENEWAL_PRICE_POLICY_ALWAYS";
    case RenewalPricePolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
