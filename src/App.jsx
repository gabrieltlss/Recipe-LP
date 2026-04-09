function App() {
  return (
    <main className="min-h-screen text-gray-700 sm:py-10 sm:bg-orange-100">

      <section className="bg-taupe-50 sm:max-w-lg sm:mx-auto sm:rounded-2xl">

        <div className="sm:p-6 sm:pb-0">
          <img src="/img/omelette.jpg" alt="" className="sm:rounded-xl" />
        </div>

        <div className="p-8">

          <div>
            <h1 className="text-4xl text-center text-amber-900">Simple Omelette Recipe</h1>
            <p className="my-6">
              An easy and quick dish, perfect for any meal.
              This classic omelette combines beaten eggs cooked to perfection,
              optionally filled with your choise of cheese, vegetables, or meats.
            </p>
          </div>

          <div className="bg-pink-100 p-6 rounded-lg">
            <h3 className="text-2xl text-pink-800">Preparation time</h3>

            <ul className="mt-3 list-disc list-inside marker:text-pink-800 *:my-2">
              <li><b>Total:</b> Approximately 10 minutes</li>
              <li><b>Preparation:</b> 5 minutes</li>
              <li><b>Cooking:</b> 5 minutes</li>
            </ul>
          </div>

          <div className="my-6">
            <h3 className="text-3xl text-amber-900">Ingredients</h3>

            <ul className="mt-6 list-disc list-inside marker:text-amber-900 *:my-2">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

          <div className="my-6">
            <h3 className="text-3xl text-amber-900">Instructions</h3>

            <ol className="my-6 list-disc list-inside marker:text-amber-900 *:my-2">
              <li><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter.</li>
              <li><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in teh eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
              <li><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-3xl text-amber-900">Nutrition</h3>

            <p className="my-4">The table bellow shows nutritional values per serving without the additional fillings.</p>

            <table className="w-100 text-center">
              <tbody className="*:border-b *:border-gray-300">
                <tr className="*:py-2">
                  <td>Calories</td>
                  <td className="text-amber-900"><b>277Kcal</b></td>
                </tr>
                <tr className="*:py-2">
                  <td>Carbs</td>
                  <td className="text-amber-900"><b>0g</b></td>
                </tr>
                <tr className="*:py-2">
                  <td>Protein</td>
                  <td className="text-amber-900"><b>20g</b></td>
                </tr>
                <tr className="*:py-2">
                  <td>Fat</td>
                  <td className="text-amber-900"><b>22g</b></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </section>
    </main>
  )
}

export default App
