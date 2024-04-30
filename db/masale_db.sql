-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2024 at 06:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `masale_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `about_id` int(11) NOT NULL,
  `about_banner` text DEFAULT NULL,
  `about_img1` text DEFAULT NULL,
  `about_discription1` text DEFAULT NULL,
  `about_img2` text DEFAULT NULL,
  `about_discription2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`about_id`, `about_banner`, `about_img1`, `about_discription1`, `about_img2`, `about_discription2`) VALUES
(7, '1712562814651aboutus.jpg', '1712562814652jija.jpg', 'Today I am trying to create my own independent existence. Behind all this is the flame of light, that flame is my family, my situation. I was confronted with a situation that only motivated me to move on. I am a child born into a normal family. My family, in a normal Indian farming community, used to work hard to make gold from the soil and fill our stomachs. Then our education, hospital e. Financial scarcity was our zodiac sign. I was living in the hope of seeing these good days in such a difficult situation. But the situation did not matter to our new hope. Faced with this situation, there was always a situation of stumbling while moving forward. But no matter what happened, I was moving forward with the determination to face this situation. I was living in an area that was and still is a drought. So the cost was higher than the income. Hard work was the only option before my eyes. My parents have never left the village. But even though they were ignorant, they were well aware that this situation would chan', '1712562814652jm.jpg', 'I realized that if you want to do something in life, you have no choice but to work hard. But everyone wanted to get a job after completing their education. But I was adamant about not doing the job. But if you want to do / do business, you need capital, if you look at the situation at home, you would not get capital. So I decided that what I really needed to do was learn how to do it right. But if you want to do business, what people have to do every day, it should not be used again and it should be done by going to a certain place. In the same vein, I launched Jijai Masale Pvt. Ltd. Founded a company by this name. And I decided that what I really needed to do was learn how to do it right. Our journey continues on the same lines. The journey of this company today is due to the progress of the company due to my employees and my customers. We have always benefited from the blessings of our customers and we hope that they will continue to do so!');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(200) DEFAULT NULL,
  `admin_email` varchar(200) DEFAULT NULL,
  `admin_password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `banner_img`
--

CREATE TABLE `banner_img` (
  `banner_img_id` int(11) NOT NULL,
  `bannerimg1` text DEFAULT NULL,
  `bannerimg2` text DEFAULT NULL,
  `bannerimg3` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `basic_information`
--

CREATE TABLE `basic_information` (
  `basic_information_id` int(11) NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `email1` varchar(100) DEFAULT NULL,
  `email2` varchar(100) DEFAULT NULL,
  `email3` varchar(100) DEFAULT NULL,
  `mobile1` varchar(15) DEFAULT NULL,
  `mobile2` varchar(15) DEFAULT NULL,
  `facebook_link` varchar(500) DEFAULT NULL,
  `instagram_link` varchar(500) DEFAULT NULL,
  `twitter_link` varchar(500) DEFAULT NULL,
  `youtube_link` varchar(500) DEFAULT NULL,
  `skype_link` varchar(500) DEFAULT NULL,
  `google_plus_link` varchar(500) DEFAULT NULL,
  `company_link` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `company_address` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `basic_information`
--

INSERT INTO `basic_information` (`basic_information_id`, `company_name`, `email1`, `email2`, `email3`, `mobile1`, `mobile2`, `facebook_link`, `instagram_link`, `twitter_link`, `youtube_link`, `skype_link`, `google_plus_link`, `company_link`, `description`, `company_address`) VALUES
(2, 'Jijai Masale Pvt.Ltd', 'jijaimasalepvtltd@gmail.com', 'info@jijaimasale.in', 'bgarje@jijaimasale.in', '+91 9323497001 ', '+91 9822497001', 'https://www.facebook.com/jijai.masale', '', '', '', '', '', 'jijaimasalepvtltd.com', 'Our Attention To Detail, Tough Quality Control And 12 Years Of Experience Has Earned Us A Wide Variety Of Clients From All Around The World', 'Jijai Masale Pvt.Ltd.- Plot No142 / 5, Satyam Shivam Heights, Ashthi-Doithan Marg Bavi, Tal-Ashti,Dist-Beed,Pin-414203. India.');

-- --------------------------------------------------------

--
-- Table structure for table `biryani_masala_products`
--

CREATE TABLE `biryani_masala_products` (
  `biryani_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `about_description` varchar(200) NOT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `biryani_masala_products`
--

INSERT INTO `biryani_masala_products` (`biryani_masala_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `about_description`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712991323234spices_powders (1).jpg', '1712991323235biryani1.jpg', '1712991323235biryani1.jpg', '1712991323235ecm1.png', '1712991323236redchilly.jpg', 'We are one of the Leading Manufacturing Companies based In Spices Since 2010 with a Strong Presence In Navi Mumbai. We Specialise In Manufacturing of Different Spices. We are Currently Available at va', 'About Biryani Masala', 'Biryani masala is a powdered spice combination made up of whole spices. It’s used to make biryani, either vegetarian or non-vegetarian. It goes well with pulao and any kebab meal. In my biryani masala', 'Health Benefits Of Jijai Masale Biryani Masasla', 'Specification Of Jijai Masale Biryani Masasla', 'Available Packeges of Biryani Masasla', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `chicken_masala_products`
--

CREATE TABLE `chicken_masala_products` (
  `chicken_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `about_description` varchar(200) NOT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chicken_masala_products`
--

INSERT INTO `chicken_masala_products` (`chicken_masala_products_id`, `banner_img`, `img1`, `img2`, `about_description`, `img3`, `img4`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712984960817spices_powders.jpg', '1712984960819chickenmasala.jpg', '1712984960819chickenmasala.jpg', 'We are one of the Leading Manufacturing Companies based In Spices Since 2010 with a Strong Presence In Navi Mumbai. We Specialise In Manufacturing of Different Spices. We are Currently Available at va', '1712984960819chikenmasala1.jpg', '1712984960819redchilly.jpg', 'About Chicken Masasla', 'Chicken masala is very rich in protein which mainly comes form the chicken. protein is used by the body to repair and fix tissues and grow hair and nails its also used in weight loss controling blood ', 'Health Benefits Of Jijai Masale Chicken Masasla', 'Specification Of Jijai Masale Chicken Masasla', 'Available Packeges of Chicken Masasla', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `coriander_products`
--

CREATE TABLE `coriander_products` (
  `coriander_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coriander_products`
--

INSERT INTO `coriander_products` (`coriander_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712983918530spices_powders (1).jpg', '1712983918540Coriende_pack.jpg', '1712983918541Coriander-Moroccan.jpg', '1712983918541Coriander-Powder-Recipe.jpg', '1712983918541redchilly.jpg', 'About Coriander Powder', 'Dried Red Chilies Powder Is A Major Food Ingredient In Indian And International Cuisines. Different Types Of Chilies Used In Red Chili types like Badge, Lavangi, Guntur, Kashmiri, Super teja etc.', 'Health Benefits Of Jijai Masale Coriender Powder', 'Specification Of Jijai Masale Coriender Powder', 'Available Packages of Coriender', 'Standard Manufacturing steps we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `description_id` int(11) NOT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `description`
--

INSERT INTO `description` (`description_id`, `description`) VALUES
(1, 'Helps in digestion.'),
(2, 'Maintain blood pressure levels'),
(3, 'Anti Inflammetry'),
(4, 'Helps in weight loss'),
(5, 'Improve cognitive function'),
(6, 'Improve heart health'),
(7, 'Helps in vessel congestion');

-- --------------------------------------------------------

--
-- Table structure for table `egg_cury_masala_products`
--

CREATE TABLE `egg_cury_masala_products` (
  `egg_cury_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `egg_cury_masala_products`
--

INSERT INTO `egg_cury_masala_products` (`egg_cury_masala_products_id`, `banner_img`, `img1`, `img2`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`) VALUES
(1, '1712992695474spices_powders.jpg', '1712992695475spices_img.png', '1712992695475redchilly.jpg', 'About Egg Curry Masala', 'Egg Curry Masala Is A Major Food Ingredients In Indian And International Cuisines. Different Types Of Ingredients Used In indian spices. benefit of kala masala is gives your dish rich smocky, flaours ', 'Health Benefits Of Jijai Masale Egg Curry Masala', 'Specification Of Jijai Masale Egg Curry Masala,Standard Manufacturing step we follow at Jijai Masale Unit', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `gallary_iframe_videos`
--

CREATE TABLE `gallary_iframe_videos` (
  `gallary_iframe_videos_id` int(11) NOT NULL,
  `gallary_video_link` varchar(200) DEFAULT NULL,
  `gallary_video_desc` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallary_iframe_videos`
--

INSERT INTO `gallary_iframe_videos` (`gallary_iframe_videos_id`, `gallary_video_link`, `gallary_video_desc`) VALUES
(5, 'https://www.youtube.com/embed/e06ZEdYprzY?si=Zoq_UYK9E4HCOYRV', 'JIJAI MASALE NOT SOLD IN ONLY INDIA, ALSO IN DUBAI OR MANY OTHER COUNTRIES..'),
(7, 'https://www.youtube.com/embed/e06ZEdYprzY?si=Zoq_UYK9E4HCOYRV', 'JIJAI MASALE NOT SOLD IN ONLY INDIA, ALSO IN DUBAI OR MANY OTHER COUNTRIES..');

-- --------------------------------------------------------

--
-- Table structure for table `gallary_imgs`
--

CREATE TABLE `gallary_imgs` (
  `gallary_imgs_id` int(11) NOT NULL,
  `gallary_desc` varchar(200) DEFAULT NULL,
  `gallary_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallary_imgs`
--

INSERT INTO `gallary_imgs` (`gallary_imgs_id`, `gallary_desc`, `gallary_image`) VALUES
(1, 'Jijaii Masale Vardhapan Din Celebrations', '1712394068137gallary_image.jpg'),
(4, 'Jijaii Masale Vardhapan Din Celebrations', '1712394709238gallary9.jpg'),
(5, 'Jijaii Masale Vardhapan Din Celebrations', '1712394808333gallary8.jpg'),
(6, 'Jijaii Masale Vardhapan Din Celebrations', '1712394819806gallary7.jpg'),
(7, 'Jijaii Masale Vardhapan Din Celebrations', '1712394830883gallary5.jpg'),
(8, 'Jijaii Masale Vardhapan Din Celebrations', '1712394842016gallary6.jpg'),
(9, 'Jijaii Masale Vardhapan Din Celebrations', '1712394853369gallary4.jpg'),
(10, 'Jijaii Masale Vardhapan Din Celebrations', '1712394865119gallary3.jpg'),
(11, 'Jijaii Masale Vardhapan Din Celebrations', '1712394878800gallary2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `google_map_contact`
--

CREATE TABLE `google_map_contact` (
  `google_map_contact_id` int(11) NOT NULL,
  `google_map_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `google_map_contact`
--

INSERT INTO `google_map_contact` (`google_map_contact_id`, `google_map_link`) VALUES
(1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302177.6331098845!2d73.67299742577467!3d18.561773641869475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea76f2312db1%3A0xa5c24a286bee5f11!2sKedari%20Nagar%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712484153193!5m2!1sen!2sin');

-- --------------------------------------------------------

--
-- Table structure for table `instant_gravy_products`
--

CREATE TABLE `instant_gravy_products` (
  `instant_gravy_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instant_gravy_products`
--

INSERT INTO `instant_gravy_products` (`instant_gravy_products_id`, `banner_img`, `img1`, `img2`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712922181256spices powders.jpg', '1712922181315ecm1.png', '1712922181315igp.jpg', ' About Instant Gravy Powder', 'Instant gravy powder can be prepared easily and stored in the fridge and used in preparing gravy curries. This enhances the dish taste with more flavors. A blend of spices and seasonings, designed to ', 'Health Benefits Of Jijai Masale Instant Gravy Powder', 'Specification Of Jijai Masale Instant Gravy Powder', 'Available Packeges of Instant Gravy Powder', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `kala_masala_products`
--

CREATE TABLE `kala_masala_products` (
  `kala_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `about_description` varchar(200) NOT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kala_masala_products`
--

INSERT INTO `kala_masala_products` (`kala_masala_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `about_description`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712989815205spices_powders.jpg', '1712989815205kalamasala.jpg', '1712989815205kalamasala.jpg', '1712989815205kalamasala1.jpg', '1712989815206redchilly.jpg', 'We are one of the Leading Manufacturing Companies based In Spices Since 2010 with a Strong Presence In Navi Mumbai. We Specialise In Manufacturing of Different Spices. We are Currently Available at va', 'About Kala Masala', 'kala masala Is A Major Food Ingredients In Indian And International Cuisines. Different Types Of Ingredients Used In indian spices. benefit of kala masala is gives your dish rich smocky, flaours can b', 'Health Benefits Of Jijai Masale Kala Masasla', 'Specification Of Jijai Masale Kala Masasla', 'Available Packeges of Kala Masasla', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `kanda_lasun_masala_products`
--

CREATE TABLE `kanda_lasun_masala_products` (
  `kanda_lasun_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kanda_lasun_masala_products`
--

INSERT INTO `kanda_lasun_masala_products` (`kanda_lasun_masala_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712988112581spices_powders.jpg', '1712988112659kandalasunmasala.jpg', '1712988112659kanda_Larson.jpg', '1712988112660kanda-lasun-masala.jpg', '1712988112660redchilly.jpg', 'About Kanda Masala', 'Kanda lasoon masala originated in Maharashtra and has greatly influenced the local cusine there. An exemplary taste that would remind you of a homemade maharashrian food.', 'Health Benefits Of Jijai Masale About Kanda Masala', 'Specification Of Jijai Masale About Kanda Masala', 'Available Packeges of About Kanda Lasoon Masala', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `kitchen_king_masala_products`
--

CREATE TABLE `kitchen_king_masala_products` (
  `kitchen_king_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kitchen_king_masala_products`
--

INSERT INTO `kitchen_king_masala_products` (`kitchen_king_masala_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712989198022spices_powders (1).jpg', '1712989198054kitchen_king.jpg', '1712989198054kitchen_king1.jpg', '1712989198054kitchen_king.jpg', '1712989198054redchilly.jpg', 'About Kitchen King Masala', 'Dried Red Chilies Powder Is A Major Food Ingredients In Indian And International Cuisines. Different Types Of Chilies Used In Red Chili type like Badge,Lavangi,Guntur,Kashmiri,Super teja etc.', 'Health Benefits Of Jijai Masale Kitchen King Masala', 'Specification Of Jijai Masale About Kitchen King Masala', 'Available Packeges of Kitchen King Masala', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `mutton_masala_products`
--

CREATE TABLE `mutton_masala_products` (
  `mutton_masala_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `about_description` varchar(200) NOT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mutton_masala_products`
--

INSERT INTO `mutton_masala_products` (`mutton_masala_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `about_description`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712986220708spices_powders (1).jpg', '1712986220709muttonmasala.jpg', '1712986220709muttonmasala.jpg', '1712986220709mutton1.jpg', '1712986220710redchilly.jpg', 'We are one of the Leading Manufacturing Companies based In Spices Since 2010 with a Strong Presence In Navi Mumbai. We Specialise In Manufacturing of Different Spices. We are Currently Available at va', 'About Mutton Masala', 'Mutton masala is a popular dish in Indian cuisine, containing common Indian foods such as lamb and turmeric, as well as olive oil and tomatoes. The term mutton generally refers to the meat of a sheep,', 'Health Benefits Of Jijai Masale Mutton Masala', 'Specification Of Jijai Masale Mutton Masala', 'Available Packeges of Mutton Masala', 'Standard Manufacturing step we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `our_branches`
--

CREATE TABLE `our_branches` (
  `our_branches_id` int(11) NOT NULL,
  `shop_place` varchar(200) DEFAULT NULL,
  `shop_name` varchar(200) DEFAULT NULL,
  `shop_mobile_no` varchar(200) DEFAULT NULL,
  `shop_email` varchar(200) DEFAULT NULL,
  `shop_address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_branches`
--

INSERT INTO `our_branches` (`our_branches_id`, `shop_place`, `shop_name`, `shop_mobile_no`, `shop_email`, `shop_address`) VALUES
(2, 'Manufacturing Address', 'JIJAI MASALE', ' 846 895 3130', 'info@ijaimasale.in', '142/5, Satyam Shivam Heights, Ashti-Doithan,\r\nMarg Bavi, Tal-Ashti, Dist-Beed, Pin-414203.\r\nMaharashtra, India.'),
(3, 'Pune', 'JIJAI MASALE', ' 846 895 3130', 'info@ijaimasale.in', 'Plot No 37, Office No 1, Aai Building,\r\nShivaji Chowk, asise of Medipoint Hospital,\r\nSr.No-49/2, Chandan Nagar, Maharashtra 411014.'),
(4, 'Mumbai', 'JIJAI MASALE', ' 846 895 3130', 'info@ijaimasale.in', 'Shop No. 1, Devdarshan Society, Plot No. 134/135,\r\nSec. No. 34, Kamothe, Navi Mumbai – 410 209 (MH) India'),
(5, 'Ahmednagar', 'JIJAI MASALE', ' 846 895 3130', 'info@ijaimasale.in', 'Gandhimala Balikashram Road,\r\nAhmednagar – 414 001, Maharashtra , India');

-- --------------------------------------------------------

--
-- Table structure for table `our_products`
--

CREATE TABLE `our_products` (
  `our_products_id` int(11) NOT NULL,
  `img1` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_products`
--

INSERT INTO `our_products` (`our_products_id`, `img1`, `heading1`) VALUES
(1, '1712917480157ch.jpg', 'Red Chilli Powder'),
(2, '1712917624350bm.jpg', 'Biryani Masala'),
(3, '1712917652198cm.jpg', 'Chicken Masala'),
(4, '1712917676764cp.jpg', 'Coriander Masala'),
(5, '1712917690547eggs.jpg', 'Eggs Curry Masala'),
(6, '1712917709330instant-grevy.jpg', 'Instant Gravy Masala'),
(7, '1712917742253kanda-lasun.jpg', 'Kanda Lasun Masala'),
(8, '1712917758095kk.jpg', 'Kitchen King Garam Masala'),
(9, '1712917787415mm.jpg', 'Mutton Masala'),
(10, '1712917804834kk.jpg', 'Kala Masala'),
(11, '1712918286012tp.jpg', 'Turmeric Powder');

-- --------------------------------------------------------

--
-- Table structure for table `our_services`
--

CREATE TABLE `our_services` (
  `our_services_id` int(11) NOT NULL,
  `our_services_title` varchar(100) DEFAULT NULL,
  `our_services_image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_services`
--

INSERT INTO `our_services` (`our_services_id`, `our_services_title`, `our_services_image`) VALUES
(3, 'Quality', '1712381357402quality.jpg'),
(4, 'Growth', '1712380445244growth.jpg'),
(6, 'Certified', '1712381506778certified.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `quantity`
--

CREATE TABLE `quantity` (
  `quantity_id` int(11) NOT NULL,
  `quantity` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quantity`
--

INSERT INTO `quantity` (`quantity_id`, `quantity`) VALUES
(1, '25 gram'),
(2, '100 gram'),
(3, '250 gram'),
(4, '500 gram'),
(5, '1 KG');

-- --------------------------------------------------------

--
-- Table structure for table `red_chilli_products`
--

CREATE TABLE `red_chilli_products` (
  `red_chilli_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL,
  `img4` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `red_chilli_products`
--

INSERT INTO `red_chilli_products` (`red_chilli_products_id`, `banner_img`, `img1`, `img2`, `img3`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`, `img4`) VALUES
(1, '1712571752072spices_powders.jpg', '1712571752074chilypack.jpg', '1712571752074chilli.png', '1712571752074Preserved-Chillis-in-Oil-3.jpg', 'About Red Chilli Powder', 'Dried Red Chilies Powder Is A Major Food Ingredient In Indian And International Cuisines. Different Types Of Chilies Used In Red Chili types like Badge, Lavangi, Guntur, Kashmiri, Super teja etc.', 'Health Benefits Of Jijai Masale About Kanda Masala', 'Specification Of Jijai Masale Red Chilly Powder', 'Available Packages of Red Chilly', 'Standard Manufacturing steps we follow at Jijai Masale Unit', '1712571752074redchilly.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `slider_image`
--

CREATE TABLE `slider_image` (
  `slider_image_id` int(11) NOT NULL,
  `slider_image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider_image`
--

INSERT INTO `slider_image` (`slider_image_id`, `slider_image`) VALUES
(1, '1712376935204slider-2.jpg'),
(2, '1712377471036slider-3.jpg'),
(3, '1712379128026slider4.jpg'),
(4, '1712377489192slider-4.jpg'),
(5, '1712377499276slider-5.jpg'),
(6, '1712377509465slider-6.jpg'),
(7, '1712377515467team.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `specification`
--

CREATE TABLE `specification` (
  `specification_id` int(11) NOT NULL,
  `specification` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specification`
--

INSERT INTO `specification` (`specification_id`, `specification`) VALUES
(1, '100 % Natural Product'),
(2, 'Quality High Priority'),
(3, 'No Artificial color or preservatives added.'),
(5, 'Anti inflammetry'),
(6, 'Improve cognitive function'),
(7, 'Improve heart health'),
(8, 'Helps in vessel congestion');

-- --------------------------------------------------------

--
-- Table structure for table `turmeric_products`
--

CREATE TABLE `turmeric_products` (
  `turmeric_products_id` int(11) NOT NULL,
  `banner_img` text DEFAULT NULL,
  `img1` text DEFAULT NULL,
  `img2` text DEFAULT NULL,
  `img3` text DEFAULT NULL,
  `img4` text DEFAULT NULL,
  `heading1` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `heading2` varchar(200) DEFAULT NULL,
  `heading3` varchar(200) DEFAULT NULL,
  `heading4` varchar(200) DEFAULT NULL,
  `heading5` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `turmeric_products`
--

INSERT INTO `turmeric_products` (`turmeric_products_id`, `banner_img`, `img1`, `img2`, `img3`, `img4`, `heading1`, `description1`, `heading2`, `heading3`, `heading4`, `heading5`) VALUES
(1, '1712981379609spices_powders.jpg', '1712981379669turmeric_pack.jpg', '1712981379671turmeric.jpg', '1712981379671turmeric11.jpg', '1712981379671redchilly.jpg', 'About Turmeric Powder', 'Dried Red Chilies Powder Is A Major Food Ingredient In Indian And International Cuisines. Different Types Of Chilies Used In Red Chili types like Badge, Lavangi, Guntur, Kashmiri, Super teja etc.', 'Health Benefits Of Jijai Masale About Kanda Masala', 'Specification Of Jijai Masale Turmeric Powder', 'Available Packages of Turmeric', 'Standard Manufacturing steps we follow at Jijai Masale Unit');

-- --------------------------------------------------------

--
-- Table structure for table `user_contact_us`
--

CREATE TABLE `user_contact_us` (
  `user_contact_us_id` int(11) NOT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `user_email` varchar(200) DEFAULT NULL,
  `user_mobile` varchar(200) DEFAULT NULL,
  `select_stat` varchar(200) DEFAULT NULL,
  `user_requirment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_contact_us`
--

INSERT INTO `user_contact_us` (`user_contact_us_id`, `user_name`, `user_email`, `user_mobile`, `select_stat`, `user_requirment`) VALUES
(1, 'Shubham Vidhate', 'shubhampavar567@gmail.com', '4567884345678', 'Maharshtra', 'QzwXECRTVBYUN'),
(5, 'Pratik Mahaling Honmane', 'honmanepratik85@gmail.com', '7517330553', 'Maharashtra', 'wlrjio3jro43nrn34r');

-- --------------------------------------------------------

--
-- Table structure for table `what_we_do`
--

CREATE TABLE `what_we_do` (
  `what_we_do_id` int(11) NOT NULL,
  `what_we_do_title` varchar(100) DEFAULT NULL,
  `what_we_do_desc` varchar(1000) DEFAULT NULL,
  `what_we_do_image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `what_we_do`
--

INSERT INTO `what_we_do` (`what_we_do_id`, `what_we_do_title`, `what_we_do_desc`, `what_we_do_image`) VALUES
(5, 'Manufacturing Unit', 'Mutton Masala, Chiken Masala, Kala Masala, Kitchen king Masala, Kanda Lahasun Masala, Corinder Powder, Turmeric Powder, Chilli Powder.', '1712383534686manufacturing unit.jpg'),
(6, 'Inquires For Franchises', 'Kindly Contact at Given Number For Inquries of Franchises', '1712383673209franchise.jpg'),
(7, 'Quality Spices Products', 'We are Manufacturing hygenic & Tasty Spices , We keep in Mind to Produce Healthy and Natural Products for Our Customers.', '1712383725118spices.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `what_we_do_title`
--

CREATE TABLE `what_we_do_title` (
  `what_we_do_title_id` int(11) NOT NULL,
  `what_we_do_title` varchar(200) DEFAULT NULL,
  `what_we_do_desc` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `what_we_do_title`
--

INSERT INTO `what_we_do_title` (`what_we_do_title_id`, `what_we_do_title`, `what_we_do_desc`) VALUES
(2, 'What we do', 'We are one of the Leading Manufacturing Companies based In Spices Since 2010 with a Strong Presence In Navi Mumbai. We Specialise In Manufacturing of Different Spices. We are Currently Available at various Location Of Maharashtra.');

-- --------------------------------------------------------

--
-- Table structure for table `why_we_are_best_choice`
--

CREATE TABLE `why_we_are_best_choice` (
  `why_we_are_best_choice_id` int(11) NOT NULL,
  `why_we_best_choice_title1` varchar(100) DEFAULT NULL,
  `why_we_best_choice_title2` varchar(100) DEFAULT NULL,
  `why_we_best_choice_desc` varchar(1000) DEFAULT NULL,
  `why_we_best_choice_feature1` varchar(200) DEFAULT NULL,
  `why_we_best_choice_feature2` varchar(200) DEFAULT NULL,
  `why_we_best_choice_feature3` varchar(200) DEFAULT NULL,
  `why_we_best_choice_feature4` varchar(200) DEFAULT NULL,
  `why_we_best_choice_feature5` varchar(200) DEFAULT NULL,
  `why_we_best_choice_image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `why_we_are_best_choice`
--

INSERT INTO `why_we_are_best_choice` (`why_we_are_best_choice_id`, `why_we_best_choice_title1`, `why_we_best_choice_title2`, `why_we_best_choice_desc`, `why_we_best_choice_feature1`, `why_we_best_choice_feature2`, `why_we_best_choice_feature3`, `why_we_best_choice_feature4`, `why_we_best_choice_feature5`, `why_we_best_choice_image`) VALUES
(4, 'Why We Are Best Choice', 'Why Choose Us', 'We are Manufacturer and Trading Company in Spices. We Provides Different Types of Spices to various Sectors. We have original Taste in Spices , Our Taste maker will make your food more tasty by simply using in right quantity. We have our unique taste for each products this taste will never be match to anyother taste.', 'We Will Be Your Most Trusted Partner With Assured Service.', 'Confidentiality And Competence Is Our Core Value.', 'We Attach Great Value To A Strong And Lasting Relationship With Clients.', 'Transparency And Professional Approach.', '100% Natural Products.', '1712388694948why_choose.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`about_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `banner_img`
--
ALTER TABLE `banner_img`
  ADD PRIMARY KEY (`banner_img_id`);

--
-- Indexes for table `basic_information`
--
ALTER TABLE `basic_information`
  ADD PRIMARY KEY (`basic_information_id`);

--
-- Indexes for table `biryani_masala_products`
--
ALTER TABLE `biryani_masala_products`
  ADD PRIMARY KEY (`biryani_masala_products_id`);

--
-- Indexes for table `chicken_masala_products`
--
ALTER TABLE `chicken_masala_products`
  ADD PRIMARY KEY (`chicken_masala_products_id`);

--
-- Indexes for table `coriander_products`
--
ALTER TABLE `coriander_products`
  ADD PRIMARY KEY (`coriander_products_id`);

--
-- Indexes for table `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`description_id`);

--
-- Indexes for table `egg_cury_masala_products`
--
ALTER TABLE `egg_cury_masala_products`
  ADD PRIMARY KEY (`egg_cury_masala_products_id`);

--
-- Indexes for table `gallary_iframe_videos`
--
ALTER TABLE `gallary_iframe_videos`
  ADD PRIMARY KEY (`gallary_iframe_videos_id`);

--
-- Indexes for table `gallary_imgs`
--
ALTER TABLE `gallary_imgs`
  ADD PRIMARY KEY (`gallary_imgs_id`);

--
-- Indexes for table `google_map_contact`
--
ALTER TABLE `google_map_contact`
  ADD PRIMARY KEY (`google_map_contact_id`);

--
-- Indexes for table `instant_gravy_products`
--
ALTER TABLE `instant_gravy_products`
  ADD PRIMARY KEY (`instant_gravy_products_id`);

--
-- Indexes for table `kala_masala_products`
--
ALTER TABLE `kala_masala_products`
  ADD PRIMARY KEY (`kala_masala_products_id`);

--
-- Indexes for table `kanda_lasun_masala_products`
--
ALTER TABLE `kanda_lasun_masala_products`
  ADD PRIMARY KEY (`kanda_lasun_masala_products_id`);

--
-- Indexes for table `kitchen_king_masala_products`
--
ALTER TABLE `kitchen_king_masala_products`
  ADD PRIMARY KEY (`kitchen_king_masala_products_id`);

--
-- Indexes for table `our_branches`
--
ALTER TABLE `our_branches`
  ADD PRIMARY KEY (`our_branches_id`);

--
-- Indexes for table `our_services`
--
ALTER TABLE `our_services`
  ADD PRIMARY KEY (`our_services_id`);

--
-- Indexes for table `red_chilli_products`
--
ALTER TABLE `red_chilli_products`
  ADD PRIMARY KEY (`red_chilli_products_id`);

--
-- Indexes for table `slider_image`
--
ALTER TABLE `slider_image`
  ADD PRIMARY KEY (`slider_image_id`);

--
-- Indexes for table `user_contact_us`
--
ALTER TABLE `user_contact_us`
  ADD PRIMARY KEY (`user_contact_us_id`);

--
-- Indexes for table `what_we_do`
--
ALTER TABLE `what_we_do`
  ADD PRIMARY KEY (`what_we_do_id`);

--
-- Indexes for table `what_we_do_title`
--
ALTER TABLE `what_we_do_title`
  ADD PRIMARY KEY (`what_we_do_title_id`);

--
-- Indexes for table `why_we_are_best_choice`
--
ALTER TABLE `why_we_are_best_choice`
  ADD PRIMARY KEY (`why_we_are_best_choice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `about_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banner_img`
--
ALTER TABLE `banner_img`
  MODIFY `banner_img_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `basic_information`
--
ALTER TABLE `basic_information`
  MODIFY `basic_information_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gallary_iframe_videos`
--
ALTER TABLE `gallary_iframe_videos`
  MODIFY `gallary_iframe_videos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gallary_imgs`
--
ALTER TABLE `gallary_imgs`
  MODIFY `gallary_imgs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `google_map_contact`
--
ALTER TABLE `google_map_contact`
  MODIFY `google_map_contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `our_branches`
--
ALTER TABLE `our_branches`
  MODIFY `our_branches_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `our_services`
--
ALTER TABLE `our_services`
  MODIFY `our_services_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `red_chilli_products`
--
ALTER TABLE `red_chilli_products`
  MODIFY `red_chilli_products_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `slider_image`
--
ALTER TABLE `slider_image`
  MODIFY `slider_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_contact_us`
--
ALTER TABLE `user_contact_us`
  MODIFY `user_contact_us_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `what_we_do`
--
ALTER TABLE `what_we_do`
  MODIFY `what_we_do_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `what_we_do_title`
--
ALTER TABLE `what_we_do_title`
  MODIFY `what_we_do_title_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `why_we_are_best_choice`
--
ALTER TABLE `why_we_are_best_choice`
  MODIFY `why_we_are_best_choice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
