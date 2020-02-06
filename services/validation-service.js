
import urlRegex from 'url-regex'

export const IS_VALID_URL = text =>
  urlRegex({ exact: true, strict: false }).test(text)
