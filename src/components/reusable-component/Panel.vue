<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			{{title}}
			<button type="button" class="close">×</button>
		</div>
		<div class="search">
			<input type="text" class="form-control"
			       placeholder="查找..."
			       v-focus>
		</div>
		<div class="panel-body smart-scrollbar">
			<ul>
				<li :title="item.name" v-for="item in list" :id="item.id">
					<slot>
						{{item.name}}
					</slot>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
        name: "",
        props: {
            title: String,
            list: Array
        }
    }
</script>

<style scoped lang="scss">
	.panel {

		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		margin: 20px auto;
		padding: 0;
		width: 300px;
		border: 1px solid #ebeef5;
		border-radius: 4px;
		font-size: 14px;

		.panel-heading {
			color: #333;
			background-color: #f5f5f5;
			border-color: #ddd;
			padding: 10px 15px;
			border-bottom: 1px solid transparent;
			border-top-right-radius: 3px;
			border-top-left-radius: 3px;
			position: relative;

			button.close {
				padding: 0;
				cursor: pointer;
				background: transparent;
				border: 0;
				-webkit-appearance: none;
				position: absolute;
				top: 6px;
				right: 10px;
				float: right;
				font-size: 21px;
				font-weight: bold;
				line-height: 1;
				color: #000;
				text-shadow: 0 1px 0 #fff;
				opacity: .2;
			}
		}

		.search {
			padding: 5px;
		}

		.panel-body {
			max-height: 36vh;
			overflow-x: hidden;
			overflow-y: auto;
			padding: 0;

			ul {
				padding-left: 0;
				list-style: none;
				margin-top: 0;
				margin-bottom: 10px;

				li {
					cursor: pointer;

					&:hover {
						border-radius: 3px;
						background-color: #f5f5f5;
					}
				}
			}
		}
	}

	.form-control {
		display: block;
		height: 34px;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

		&:focus {
			border-color: #66afe9;
			outline: 0;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
		}
	}
</style>