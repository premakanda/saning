import styles from './Icon.module.css';

export type IconName =
  | 'wrench'
  | 'faucet'
  | 'toilet'
  | 'radiator'
  | 'floor-heating'
  | 'pipes'
  | 'drain'
  | 'boiler'
  | 'shower'
  | 'sink'
  | 'leak'
  | 'valve'
  | 'heating'
  | 'phone'
  | 'sun'
  | 'moon'
  | 'check'
  | 'arrow-up-right'
  | 'menu'
  | 'close';

export function Icon({
  name,
  large = false,
}: {
  name: IconName;
  large?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={[styles.icon, styles[name], large ? styles.large : ''].join(
        ' ',
      )}
    />
  );
}
