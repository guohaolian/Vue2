<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
		<h2>{{ studentName }}</h2>
		<h2>{{ sex }}</h2>
	</div>
</template>

<script>
export default {
	name: 'School',
	data() {
		return {
			name: '尚硅谷',
			address: '北京',
			studentName: '',
			sex: ''
		}
	},
	mounted() {
		// console.log('School',this)
		this.$bus.$on('guohaolian', (...data) => {
			console.log('我是School组件，收到了数据', data[0]);
			//this.studentName = data[0];
			//this.sex = data[1];
			const [studentName, sex] = data;
			this.studentName = studentName;
			this.sex = sex;

		})
	},
	beforeDestroy() {
		this.$bus.$off('guohaolian')
	},
}
</script>

<style scoped>
.school {
	background-color: skyblue;
	padding: 5px;
}
</style>