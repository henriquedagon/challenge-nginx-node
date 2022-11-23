
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

export const creation_query = ' \
CREATE TABLE `people` ( \
    `id` int(11) NOT NULL AUTO_INCREMENT, \
    `name` varchar(255) DEFAULT NULL, \
    PRIMARY KEY (`id`) \
  ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1; \
'

export const insert_query = `insert into people(name) values('Henrique')`
