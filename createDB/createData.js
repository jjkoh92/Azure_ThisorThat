db = db.getSiblingDB('things')

db.createCollection('items')
itemCollection = db.getCollection("items")
itemCollection.remove({})
itemCollection.insert(
	{
		item_id: 1,
		category_id: 1,
		item_name: "Pizza",
		item_number_of_votes: 20,
		item_percent_of_votes: 0.0,
		item_rank: 1,
		link: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 2,
		category_id: 1,
		item_name: "Ice Cream",
		item_number_of_votes: 19,
		item_percent_of_votes: 0.0,
		item_rank: 2,
		link: "https://paradis-icecream.com/wp-content/uploads/2020/05/img_1806-837x1024.jpg?theia_smart_thumbnails_file_version=2"
	}
)
itemCollection.insert(
	{
		item_id: 3,
		category_id: 2,
		item_name: "The Matrix",
		item_number_of_votes: 18,
		item_percent_of_votes: 0.0,
		item_rank: 3,
		link: "https://m.media-amazon.com/images/M/MV5BNzM4OTkzMjcxOF5BMl5BanBnXkFtZTgwMTkxMjI1MTI@._V1_.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 4,
		category_id: 1,
		item_name: "Sushi",
		item_number_of_votes: 17,
		item_percent_of_votes: 0.0,
		item_rank: 4,
		link: "https://images.dailyhive.com/20210918180826/Ltd-Edition-Sushi.jpeg"
	}
)
itemCollection.insert(
	{
		item_id: 5,
		category_id: 3,
		item_name: "Basketball",
		item_number_of_votes: 16,
		item_percent_of_votes: 0.0,
		item_rank: 5,
		link: "https://gopsusports.com/images/2021/11/1/Ball_Basket_A_21_NWU_MS_11902_71.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 6,
		category_id: 3,
		item_name: "Baseball",
		item_number_of_votes: 15,
		item_percent_of_votes: 0.0,
		item_rank: 6,
		link: "https://techcrunch.com/wp-content/uploads/2019/03/GettyImages-844016022.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 7,
		category_id: 2,
		item_name: "Avatar",
		item_number_of_votes: 14,
		item_percent_of_votes: 0.0,
		item_rank: 7,
		link: "https://i.pinimg.com/originals/17/aa/71/17aa718c1ab15b482505b8431cf596fc.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 8,
		category_id: null,
		item_name: "Tree",
		item_number_of_votes: 13,
		item_percent_of_votes: 0.0,
		item_rank: 8,
		link: "https://www.greenlawnfertilizing.com/wp-content/uploads/2017/01/oak-tree-540x540.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 9,
		category_id: 3,
		item_name: "Tennis",
		item_number_of_votes: 12,
		item_percent_of_votes: 0.0,
		item_rank: 9,
		link: "https://thumbs.dreamstime.com/z/tennis-ball-tennis-court-photo-44444538.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 10,
		category_id: null,
		item_name: "Ford F-150",
		item_number_of_votes: 11,
		item_percent_of_votes: 0.0,
		item_rank: 10,
		link: "https://cdn.wallpapersafari.com/68/32/4HljrB.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 11,
		category_id: 1,
		item_name: "Cookie",
		item_number_of_votes: 10,
		item_percent_of_votes: 0.0,
		item_rank: 11,
		link: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 12,
		category_id: null,
		item_name: "Sleep",
		item_number_of_votes: 9,
		item_percent_of_votes: 0.0,
		item_rank: 12,
		link: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/02/talkSleep-1217582444-770x533-1.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 13,
		category_id: null,
		item_name: "Computer",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 13,
		link: "https://www.popphoto.com/uploads/2021/08/28/Best_Desktop_Computer.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 14,
		category_id: null,
		item_name: "Computer Science",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 14,
		link: "https://miro.medium.com/max/1400/1*qFmCunmw3pnbFTAsBy_rXw.png"
	}
)
itemCollection.insert(
	{
		item_id: 15,
		category_id: 4,
		item_name: "Nike",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 15,
		link: "https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 16,
		category_id: 4,
		item_name: "Adidas",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 16,
		link: "https://venturebeat.com/wp-content/uploads/2021/12/adidas-4.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 17,
		category_id: 4,
		item_name: "Tesla",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 17,
		link: "https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg"
	}
)
itemCollection.insert(
	{
		item_id: 18,
		category_id: 4,
		item_name: "Supreme",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 18,
		link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Logo.svg/1200px-Supreme_Logo.svg.png"
	}
)
itemCollection.insert(
	{
		item_id: 19,
		category_id: 4,
		item_name: "Apple",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 19,
		link: "https://www.apple.com/v/apple-events/home/u/images/meta/overview__bcphzsdb4fpu_og.png"
	}
)
itemCollection.insert(
	{
		item_id: 20,
		category_id: 4,
		item_name: "Android",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 20,
		link: "https://cdn.zerosuniverse.com/wp-content/uploads/android-hacking-apps-e1569136461686.jpg"
	}
)


db.createCollection('categories')
categoryCollection = db.getCollection("categories")
categoryCollection.remove({})
categoryCollection.insert(
	{
		category_id : 1,
		category_name: "Food",
		items : [ 
			{
				item_id: 1
			},
			{
				item_id: 2
			},
			{
				item_id: 4
			}
		],

	}
)
categoryCollection.insert(
	{
		category_id : 2,
		category_name: "Movies",
		items : [ 
			{
				item_id: 3
			},
			{
				item_id: 7
			}
		],

	}
)
categoryCollection.insert(
	{
		category_id : 3,
		category_name: "Sports",
		items : [ 
			{
				item_id: 5
			},
			{
				item_id: 6
			},
			{
				item_id: 9
			}
		],

	}
)
categoryCollection.insert(
	{
		category_id : 4,
		category_name: "Brands",
		items : [ 
			{
				item_id: 15
			},
			{
				item_id: 16
			},
			{
				item_id: 17
			},
			{
				item_id: 18
			},
			{
				item_id: 19
			},
			{
				item_id: 20
			}
		],

	}
)
