import { useParams } from "react-router-dom";

const CategoriesDetail = () => {
  const { id } = useParams();

  return <div>CategoriesDetail : {id}</div>;
};

export default CategoriesDetail;
