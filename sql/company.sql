CREATE TABLE   IF NOT EXISTS  `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(20) DEFAULT NULL,
  `c_info` JSON DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `company` set c_name='Falcon', c_info='{
    "name": "Falcon",
    "address": {
        "street": "Room 348, Nuobo Plaza, 269 Qianjin 1st Road,",
        "district": "Wenhui community, Xinan streent, Bao’an District, ",
        "country": "Shenzhen, Guangdong,China"
    },
    "contact": {
        "phone": "+86 755 27889564",
        "mobile": "+86 18922872901",
        "fax": "+86 755 27889564",
        "url": "https://www.gocampingday.com",
        "email": [
            {
                "name": "sales@falcon-technology.cn",
                "href": "mailto:sales@falcon-technology.cn"
            },
            {
                "name": "ellen@falcon-technology.cn",
                "href": "mailto:ellen@falcon-technology.cn"
            }
        ]
    }
}';