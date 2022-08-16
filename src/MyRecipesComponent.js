function MyRecipesComponent({label, image, calories}) {
	return(
		<div>
			<h2>{label}</h2>
			<img src={image} alt="dishes"/>
			<h4>{calories} calories</h4>
		</div>
	)
}
export default MyRecipesComponent;