<template>
	<div>
		<Panel2 title="成员" :showSubHeading="true">
			<template v-slot:sub-heading>
				<input type="text" class="form-control"
				       placeholder="查找..."
				       v-focus>
			</template>

			<template>
				<ul>
					<li :title="item.name" v-for="(item,index) in user" :id="item.id">
						<img :src="item.avatar" alt="">
						{{item.name}}
					</li>
				</ul>
			</template>
		</Panel2>

		<Panel2 title="标签" :showFooter="true">
			<template>
				<ul>
					<li :title="item.name" v-for="(item,index) in tag" :id="item.id">
						<span class="tag-block" :style="{backgroundColor:item.color}"></span>
						<span>{{item.name}}</span>
					</li>
				</ul>
			</template>
			<template v-slot:footer>
				<a href="#">新建标签</a>
			</template>
		</Panel2>
	</div>
</template>

<script>
    import Panel2 from '@/components/reusable-component/Panel2.vue';

    export default {
        name: "demo35",
        data() {
            return {
                user: [
                    {
                        id: 1,
                        avatar: 'http://tx.haiqq.com/uploads/allimg/c161118/14O4105914G20-1GT.jpg',
                        name: 'Jerry'
                    },
                    {
                        id: 2,
                        avatar: 'http://img2.ph.126.net/vZ1r-IVk_j-cAi-noOuCEw==/760826862149437991.png',
                        name: 'Jack'
                    },
                    {
                        id: 3,
                        avatar: 'http://www.icosky.com/icon/png/Movie%20%26%20TV/SUPERBUUF/Stealth%20Iron%20Man.png',
                        name: 'Tom'
                    }
                ],
                tag: [
                    {id: 1, color: 'red', name: 'bug'},
                    {id: 2, color: 'green', name: '需求'},
                    {id: 3, color: 'yellow', name: '紧急'}
                ]
            }
        },
        methods: {},
        components: {
            Panel2
        }
    }
</script>

<style lang="scss" scoped>
	ul li {
		display: flex;
		align-items: center;

		img {
			width: 35px;
			height: 35px;
			margin-right: 15px;
		}

		.tag-block {
			width: 27px;
			height: 27px;
			border-radius: 4px;
			margin-right: 15px;
		}
	}


</style>