/* eslint-disable */
type AttributesMapping = { [key: string]: string }

const attributesMapping: AttributesMapping = {
  _count: 'count',
  _sum: 'sum',
  tx_ref: 'txRef',
  phone_number: 'phoneNumber',
  wallet_id: 'walletId',
  account_name: 'accountName',
  account_number: 'accountNumber',
  bank_code: 'bankCode',
  acct_length: 'accountLength',
  is_active: 'isActive',
  is_24hrs: 'is24hrs',
  is_rtgs: 'isRtgs',
  is_mobilemoney: 'isMobileMoney',
  country_id: 'countryId',
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  checkout_url: 'checkoutUrl',
  return_url: 'returnUrl',
  Games: 'games',
}

const reversedMapping: AttributesMapping = Object.fromEntries(
  Object.entries(attributesMapping).map(([key, value]) => [value, key]),
)

export default function changeAttributesCase(
  obj: { [key: string]: any },
  direction: 'toCamel' | 'toSnake' = 'toCamel',
): { [key: string]: any } {
  const mapping = direction === 'toCamel' ? attributesMapping : reversedMapping

  const result: { [key: string]: any } = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = mapping[key] || key
      result[newKey] = obj[key]
    }
  }
  return result
}
