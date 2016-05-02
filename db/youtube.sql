-- phpMyAdmin SQL Dump
-- version 4.2.12deb2
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Gegenereerd op: 03 jul 2015 om 14:53
-- Serverversie: 5.5.42-1
-- PHP-versie: 5.4.4-14+deb7u14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `0892322`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `youtube`
--

CREATE TABLE IF NOT EXISTS `youtube` (
`id` int(10) NOT NULL,
  `titel_video` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `youtube_url` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `youtube_thumbnail_url` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `youtube`
--

INSERT INTO `youtube` (`id`, `titel_video`, `youtube_url`, `youtube_thumbnail_url`, `category`) VALUES
(26, 'Assassin&rsquo;s Creed Syndicate E3 Cinematic Trailer [EUROP', 'WTBbwgsyxvg', 'https://i.ytimg.com/vi/WTBbwgsyxvg/default.jpg', 'Assassins Creed'),
(27, 'Heavy Rain - Official E3 Trailer [HD]', 'JKPPdgBK3r8', 'https://i.ytimg.com/vi/JKPPdgBK3r8/default.jpg', 'Quantic dreams'),
(29, 'Beyond: Two Souls Trailer [HD]', 'me3AxpCidTM', 'https://i.ytimg.com/vi/me3AxpCidTM/default.jpg', 'Quantic dreams'),
(30, 'GTA 5 - Michael/Franklin/Trevor Trailer', 'A0RLOOyhr9M', 'https://i.ytimg.com/vi/A0RLOOyhr9M/default.jpg', 'GTA V'),
(31, 'UNCHARTED 4: A Thief&rsquo;s End - E3 2015 Press Conference ', 'zL46dpNEPPA', 'https://i.ytimg.com/vi/zL46dpNEPPA/default.jpg', 'Uncharted'),
(32, 'UNCHARTED: The Nathan Drake Collection Announce Video | PS4', 'rKfRZ1x2nbQ', 'https://i.ytimg.com/vi/rKfRZ1x2nbQ/default.jpg', 'Uncharted'),
(33, 'The Last of Us Remastered E3 2014 Trailer (PS4)', 'AaOWRvmtEFQ', 'https://i.ytimg.com/vi/AaOWRvmtEFQ/default.jpg', 'TLOU'),
(34, 'Rise of the Tomb Raider Gameplay Reveal Trailer  E3 2015 Mic', 'QJax5cnqBzM', 'https://i.ytimg.com/vi/QJax5cnqBzM/default.jpg', 'Tomb Raider');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `youtube`
--
ALTER TABLE `youtube`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `youtube`
--
ALTER TABLE `youtube`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
