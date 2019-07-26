// == Initial State
const initialState = {
  articles: [
    {
      id: '1',
      videoId: 'TcZyiYOzsSw',
      image: 'src/Assets/img/wow.jpg',
      title: 'World Of Warcraft : Classic',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '2',
      videoId: '0GLbwkfhYZk',
      image: 'src/Assets/img/jedi.jpg',
      title: 'Star Wars : Jedi Fallen Order',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '3',
      videoId: 'qIcTM8WXFjk',
      image: 'src/Assets/img/cyber.jpg',
      title: 'Cyberpunk 2077',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '4',
      videoId: 'qPNiIeKMHyg',
      image: 'src/Assets/img/last.jpg',
      title: 'The Last of Us Part II',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '5',
      videoId: 'Zi8k4KGyW6o',
      image: 'src/Assets/img/watch.jpg',
      title: 'Watch Dogs 3 : Legion',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '6',
      videoId: 'ENjwexZnLPI',
      image: 'src/Assets/img/death.jpg',
      title: 'Death Stranding',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '7',
      image: 'https://static.fnac-static.com/multimedia/Images/FD/Comete/111882/CCP_IMG_ORIGINAL/1447719.jpg',
      title: 'Kingdom Hearts 3 est le jeu le plus vendu de la licence',
      resume: 'Selon NPD, Kingdom Hearts III est devenu le jeu le plus vendu de la licence tous épisodes confondus en l\'espace de quelques mois seulement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '8',
      image: 'https://a.allegroimg.com/s512/031565/5e9f46d24abc988b39eb94d0af3f/Mortal-Kombat-11-Steam-PC-KLUCZ',
      title: 'Mortal Kombat 11: release date has been leaked',
      resume: 'Kombat 11 et les leaks, c\'est une longue histoire d\'amour. Après le roster du jeu qui a été divulgué en avance, c\'est au tour de Nightwolf, le kombattant amérindien de MK11.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '9',
      image: 'https://hb.imgix.net/4d85628c9dbe4f21bfd3299b3a10b1aa62a21894.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6c61117f1a1b1d56da6c5118618bc2f6',
      title: 'Final Fantasy XIV : "l\'Éveil d\'Eden" arrive aujourd\'hui',
      resume: 'Tout juste deux semaines après la sortie de Final Fantasy XIV : Shadowbringers, Square Enix déploie la première série de raids de cette troisième extension, "l\'Éveil d\'Eden".',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '10',
      image: 'http://image.jeuxvideo.com/medias-md/156382/1563818741-4350-card.jpg',
      title: 'Wolfenstein  toujours aussi nerveux - E3 2019',
      resume: 'Attendu pour le moi prochain, Wolfenstein Youngblood a dévoilé un nouveau trailer, afin de rappeler l\'ambition qui sera la sienne à partir du 16 juillet.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
    {
      id: '11',
      image: 'https://static.fnac-static.com/multimedia/Images/FD/Comete/111882/CCP_IMG_ORIGINAL/1447719.jpg',
      title: 'Kingdom Hearts 3 est le jeu le plus vendu de la licence',
      resume: 'Selon NPD, Kingdom Hearts III est devenu le jeu le plus vendu de la licence tous épisodes confondus en l\'espace de quelques mois seulement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
    },
  ],
  categories: [
    {
      id: '1',
      name: 'PC',
    },
    {
      id: '2',
      name: 'XBOX',
    },
    {
      id: '3',
      name: 'PLAYSTATION',
    },
    {
      id: '4',
      name: 'NINTENDO',
    },
    {
      id: '5',
      name: 'IOS',
    },
    {
      id: '6',
      name: 'ANDROID',
    },
  ],
  games: [
    { key: 1, text: 'MMO', value: 1 },
    { key: 2, text: 'RPG', value: 2 },
    { key: 3, text: 'ACTION', value: 3 },
    { key: 4, text: 'SPORT', value: 4 },
    { key: 5, text: 'FPS', value: 5 },
    { key: 6, text: 'ADVENTURE', value: 6 },
  ],
  activeItem: 'home',
};

// == Types
const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.name,
      };

    default:
      return state;
  }
};

// == Action Creators
export const setActiveItem = name => ({
  type: SET_ACTIVE_ITEM,
  name,
});


// == Selectors


// == Export
export default reducer;
