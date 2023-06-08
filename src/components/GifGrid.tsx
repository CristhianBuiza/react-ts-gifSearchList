import { useFetchGifs } from "../helper/getGifs";
import GifItem from "./GifItem";
import { Datum } from "../types/giphy";

interface GifGridProps {
  category: string;
}
const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const { data, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        "cargando..."
      ) : (
        <div className="card-grid">
          {data.map((item: Datum) => (
            <GifItem
              key={item.id}
              title={item.title}
              image={item.images.downsized_large.url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
