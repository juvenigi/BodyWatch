export type ChooseOption<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]
/* FIXME this appears not to work as originally intended, but it's probably better that it does not work
 * I wanted to implement heavy logic as a type...
 */
