// Buttons Stories
import button from './button.twig';

import buttonData from './button.yml';
import buttonaskquoteData from './button-ask-quote.yml';
import buttonlearnmoreData from './button-learnmore.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const twig = () => button(buttonData);
export const twigAskQuoteData = () => button(buttonaskquoteData);
export const twigLearnMore = () => button(buttonlearnmoreData);
