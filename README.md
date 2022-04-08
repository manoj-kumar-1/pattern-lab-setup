Requirements
-----------------
1. Node (version v16.x)
2. Emulsify CLI (npm install -g @emulsify/cli)
3. Composer
4. PHP 7+

Installation of Pattern lab.
-----------------------------------
Before you follow the steps below, verify you have the CLI installed | npm install -g @emulsify/cli
1. Download Emulisify_drupal theme from url (https://www.drupal.org/project/emulsify_drupal)
2. In your project root, initialize a theme based on the Drupal starter | emulsify init "My Awesome Theme" (Using your preferred theme name)
3. Move into your new theme | cd themes/custom/my_awesome_theme
4. Install the Compound system | emulsify system install --repository https://github.com/emulsify-ds/compound.git --checkout 1.1.0
5. Update node version v16.x | nvm use 16
6. Build theme | npm run build
7. Enable your theme and its dependencies* | drush then THEME_NAME -y && drush en components emulsify_twig -y
 ( if module not already a part of your project, run | composer require drupal/components drupal/emulsify_twig )
8. Run storybook | npm run storybook
