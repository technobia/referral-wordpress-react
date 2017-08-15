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
define('AUTH_KEY',         '}dqZ4](uI?K$&FJ;Iq5)[r{@<Ci/wWb,K}IHJrMUPn@SGK}K/-$Fy{U5N]}8_g&m');
define('SECURE_AUTH_KEY',  '1:bHg.5pvLEdxT*zbrS&y5}nQDoFHU($iGASw+Z`^g(<bt2x_Ouh+[Q}eTCx/OmQ');
define('LOGGED_IN_KEY',    'Dbb5%g*j}zIX]&#[fO{_`a]~ [r*X a/iTgVx-A+%%@gn^?Tb,M,$Ej45izrozP6');
define('NONCE_KEY',        'Hw~IFdYD1cN%5#LwE,j)4@AR1.I&*`ua6zO9pwPn%j!`;1V?BTZ=K~lax-RV{,M2');
define('AUTH_SALT',        'Rk?IiVH c4yK?i/o.N(G 3gu[7Gw+r L0;{mxpcfwVbpH{Z7uu,$OX#C`nPqJ~v>');
define('SECURE_AUTH_SALT', 'B v!Pnkb?58B:bi%krOJmoq/O>w)$F=FV:yjTO!Y&#0ZRkJ3^ !gS[`33u0V8WO`');
define('LOGGED_IN_SALT',   'S]I[r$6J]Sf0kpABzime!fq)C^j<E@?!|eI{vthF|`XXWV}z5E5cjFj&(j1:dFFa');
define('NONCE_SALT',       '<(sr#E|95rH8qL7x~yBht(9R`,P AI`L@iL<O:P:76[APm#`gs<N_/~-D?qx-BMX');

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
