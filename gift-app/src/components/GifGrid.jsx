import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from '../components';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading</h2>}
      <div className="d-flex flex-wrap p-3 ">
        {images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
