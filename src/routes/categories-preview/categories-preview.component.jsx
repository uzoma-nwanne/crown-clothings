import { React, Fragment} from "react";
import { useSelector } from "react-redux/es/exports";

import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading?<Spinner/>:(Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      }))}
    </Fragment>
  );
};

export default CategoriesPreview;
