<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'referral');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'RXW:]N8k!]WAt4DR&K{efuTB)c!K(Z nX<~aZ7Z,WOVk> v5aB2*QnEyy)3C<(q$');
define('SECURE_AUTH_KEY',  '-9TnuG?0~fTO(T:xrgB]oP9I*M0$*-olMLd*?O&;q+A>[IW5zShvgH&W&zchRR?-');
define('LOGGED_IN_KEY',    'fV&}Nysubpv|zp>46SQIRFZKEC3]ERcgbVjh}vT@dDS&D;1wz3,fh;q4ILxj>5h6');
define('NONCE_KEY',        'LYhxVbD_`is`&vS3JSw$=*y;w(]o#w*ctL%a&VXyA[-$,3tAigGn[<1)kLfH[FUH');
define('AUTH_SALT',        'lE$Z?*@Uho RG~^_YeLz+BHF68r]&G#wMD_C3Q@^P|#=MAkzkd-f@f&]4)Q@p[tc');
define('SECURE_AUTH_SALT', 'R*Fan[P]|s`2e%O$=r/:iG5s.1 .yEM`/WX`5.Wr}qV:Hv@cwR~(x1i5u>pl&Vh=');
define('LOGGED_IN_SALT',   '1DnmX*^@gJ-MfXd51KqImdbqyB%ht8,P#X$Wc!H/dDT[Zq[7tjz25nX9PCQ,Hov=');
define('NONCE_SALT',       'mqE1YUnv?$iVaaH4Wwxmn#7a|s~pw<FM$f3gIz#-+%fOKP-^74c&z@x9#~Aiknn]');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rf_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
