db.usuariogrupos.aggregate({ $unwind: "$user_id" })


{
  cust_id: "abc123",
  ord_date: ISODate("2012-11-02T17:04:11.102Z"),
  status: 'A',
  price: 50,
  items: [ { sku: "xxx", qty: 25, price: 1 },
           { sku: "yyy", qty: 25, price: 1 } ]
}


db.usuariogrupo.aggregate( [
   { $unwind: "$user_id" },
   {
     $project: {
        s_nome: 1
     }
   }
] );


db.usuariogrupo.
  find().
  populate('usuarios').
  exec(function(error, groups) {
    console.log(usuariogrupos[0].usuarios[0].s_name);
  });

  UserGroup.find().populate('users').exec(function(error, groups) { 
    // Groups contains every document in usergroups with users field populated // Prints 'Val' 
    console.log(groups[0][0].name)
  });


http://www.filmesonlinegratis.net/assistir-o-lobo-de-wall-street-dublado-online.htmlppp