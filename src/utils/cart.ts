import { atom } from 'nanostores';

export const $cart = atom<any[]>([]);

export const $cartAnimation = atom<{
  isAnimating: boolean;
  timerId: ReturnType<typeof setTimeout> | undefined;
}>({
  isAnimating: false,
  timerId: undefined,
});

export function setCart(cart: any[]) {
  $cart.set(cart);

  const cartAnimationState = $cartAnimation.get();
  clearTimeout(cartAnimationState.timerId);

  const timerId = setTimeout(() => {
    $cartAnimation.set({
      isAnimating: false,
      timerId: undefined,
    });
  }, 2_000);
  $cartAnimation.set({
    isAnimating: true,
    timerId,
  });
}
