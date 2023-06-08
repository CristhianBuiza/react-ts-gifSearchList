interface GifItemProps {
  title: string;
  image: string;
}
const GifItem: React.FC<GifItemProps> = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifItem;
