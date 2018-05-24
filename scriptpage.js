
// date variables control dates on blog posts and also related dates for items in inventory

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const locale = "en-us";
const getMonth = date.toLocaleString(locale, {month: "long"});

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const getDate = weekday[date.getDay()];

//console.log(date);
//console.log(getDate);
//console.log(getMonth);
//console.log(month);

const items = [
	{id: 111,
	badgeId: 112,
	image: "images/item02.jpg",
	info: "Ultrasoft Graphic T-shirt",
	price: "39.99",
	priceId: 123,
	remaining: 4,
	featured: true,
	staffPick: false,
	sale: false, //sale is set to false inititally and potentially set to true based on variable later
	arrived: date - 5},

	{id: 222,
	badgeId: 223,	
	image: "images/item03.jpg",
	info:"Ultralight Windbreaker",
	price: "94.99",
	priceId: 121,
	remaining: 8,
	featured: true,
	staffPick: false,
	sale: false,
	arrived: date - 5},

	{id: 333,
	badgeId: 334,
	priceId: 122,
	image: "images/item04.jpg",
	info:"Tight Waxed Denim Trousers",
	price: "104.99",
	remaining: 4,
	featured: true,
	staffPick: false,
	sale: false,
	arrived: date - 16},

	{id: 444,
	badgeId: 445,
	priceId: 124,
	image: "images/item06.jpg",
	info:"Slim fit Racerback Tank",
	price: "29.99",
	remaining: 8,
	featured: true,
	staffPick: false,
	sale: false,
	arrived: date - 25},

	{id: 555,
	badgeId: 556,
	priceId: 126,
	image: "images/item07.jpg",
	info:"Loose Fit Utility Pants",
	price: "120.99",
	remaining: 8,
	featured: false,
	staffPick: true,
	arrived: date - 16},

	{id: 666,
	badgeId: 667,
	priceId: 127,
	image: "images/item10.jpg",
	info:"Blackout Unisex Sneakers",
	price: "85.99",
	remaining: 8,
	featured: false,
	staffPick: true,
	sale: false,
	arrived: date - 5},

	{id: 777,
	badgeId: 778,
	priceId: 128,
	image: "images/item09.jpg",
	info:"Weather Proof Jacket",
	price: "69.99",
	remaining: 4,
	featured: false,
	staffPick: true,
	sale: false,
	arrived: date - 16},

	{id: 888,
	badgeId: 889,
	priceId: 129,
	image: "images/item11.jpg",
	info:"Unisex One Piece Flight Suit",
	price: "299.99",
	remaining: 5,
	featured: false,
	staffPick: true,
	sale: false,
	arrived: date - 5},

	{id: 999,
	badgeId: 990,
	priceId: 130,
	image: "images/item12.jpg",
	info:"Evening Standard Blazer",
	price: "159.99",
	remaining: 8,
	featured: false,
	staffPick: true,
	sale: false,
	arrived: date - 16},


	{id: 100,
	badgeId: 110,
	priceId: 131,
	image: "images/item13.jpg",
	info:"Theft Proof Backpack",
	price: "110.99",
	remaining: 8,
	featured: false,
	staffPick: true,
	sale: false,
	arrived: date - 30},
]







const posts = [
	{id: 1000,
	image: "images/blog01.jpg",
	alt: "Female techwear enthusiast models latest trends",
	category: "News",
	heading: "Women's wear FW2018 brings solid fits paired with lightweight materials.",
	author: "Artemis",
	comments: "3",
	month: month,
	day: "05",
	preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi commodi obcaecati quas iure dolorum placeat enim aliquid officiis animi assumenda nesciunt quod impedit hic minus nemo, numquam dolore distinctio alias!"},
	
	{id: 2000,
	image: "images/blog02.jpg",
	alt: "YYZ staff members model their fave fall pieces",
	category: "Monthly",
	heading: "Staff picks move us stylishly once again into another chilly fall season.",
	author: "Aech",
	comments: "6",
	month: month,
	day: "24",
	preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi commodi obcaecati quas iure dolorum placeat enim aliquid officiis animi assumenda nesciunt quod impedit hic minus nemo, numquam dolore distinctio alias!"},
];



//console.log(posts);

const blogContent = document.getElementById("blogPosts");

const addPosts = () => posts.forEach(post =>{

	const parentDiv = document.createElement("div");
	parentDiv.className ="blogPostContainer";
	parentDiv.id = `${post.id}`
	console.log(parentDiv.id);

	const imageDiv = document.createElement("div")
	const link = document.createElement("a")
	link.setAttribute("href", "#");

	imageDiv.className = "blogImage"
	const image = document.createElement("img")
	image.alt = `${post.alt}`

	imageDiv
		.appendChild(link)
		.appendChild(image)
		.src = `${post.image}`
	//console.log(imageDiv);
		
	const postOutline = document.createElement("div")
	postOutline.className = "postOutline";

	const postDate = document.createElement("div")
	postDate.className = "postDate";

	const addMonth = `<h3>${getMonth}</h3>`; 
	const month = document.createElement("div")
	month.className = "month"
	month.innerHTML+= (`${addMonth}`)

	const addDay = `<h3>${post.day}</h3>`; 
	const date = document.createElement("div")
	date.className = "date"
	date.innerHTML += (`${addDay}`)

	postDate
		.appendChild(month)
	postDate
		.appendChild(date)


	const headline = `<a href="#"><h3>${post.category}: ${post.heading}</h3></a>`;
	const postBreakdown = document.createElement("div")
	postBreakdown.className = "postBreakdown"
	postBreakdown.innerHTML += (`${headline}`)

	const details = `<a href="#"><p>Posted by ${post.author} <span> / </span> ${post.comments} Comments</p></a>`;
	const postDetails = document.createElement("div")
	postDetails.className = "postDetails"
	postDetails.innerHTML += (`${details}`)

	const postPreview = document.createElement("div")
	const previewText = document.createElement("p")
	previewText.innerHTML += (`${post.preview}`)
	postPreview.className = "postPreview"
	postPreview
		.appendChild(previewText)




	parentDiv
	    .appendChild(imageDiv)
	parentDiv
	    .appendChild(postOutline)
	postOutline
	    .appendChild(postDate)
	postOutline
	   	.appendChild(postBreakdown)
	postBreakdown
		.appendChild(postDetails)
	postBreakdown
	   	.appendChild(postPreview)

	blogContent
		.appendChild(parentDiv)



	console.log(parentDiv);

})

addPosts();

