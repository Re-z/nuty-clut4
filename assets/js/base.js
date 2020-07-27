import i3221 from '@/assets/img/items/322-1.jpg';
import i3222 from '@/assets/img/items/322-2.jpg';
import i3223 from '@/assets/img/items/322-3.jpg';
import i3225 from '@/assets/img/items/322-5.jpg';
import i3226 from '@/assets/img/items/322-6.jpg';
import i341 from '@/assets/img/items/341-1.jpg';
import i3551 from '@/assets/img/items/355-1.jpg';
import i3111 from '@/assets/img/items/311-1.jpg';
import i4111 from '@/assets/img/items/411-1.jpg';
import i4221 from '@/assets/img/items/422-1.jpg';


const items = [
	{
		imgs: [i3221, i3222, i3223,i3225,i3226],
		id: 322,
		price: '100грн',
		name: 'Blablabla111',
		code: 332 + 111,
		size: '10/20/30',
		color: 'red',
		leather: 'Натуральная кожа',
		leatherType: 'Свинная кожа',
		comments: [
			{
				rating: 5,
				author: 'Aut1',
				time: '10/05/2020',
				text: 'text from vuex'
			},
			{
				rating: 4,
				author: 'Aut12',
				time: '10/05/2020',
				text: 'text from vuex2'
			},
		]
	},
	{
		imgs: [i341,i3551,i3111,i3226],
		id: 344,
		price: '100грн',
		name: 'Blablabla22',
		code: 332 + 111,
		size: '10/20/30',
		color: 'red',
		leather: 'Натуральная кожа',
		leatherType: 'Свинная кожа',
	},

]

export default items;