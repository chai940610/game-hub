import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl=(url:string)=>{
    if (!url) return noImage;
    const target='media/';
    const index=url.indexOf(target)+target.length;  //find the location of the media, indexOf(target)=22 and target.length, which mean number of character of media, which is 6
    return url.slice(0,index)+'crop/600/400/'+url.slice(index); //url.slice(0,index)=https://media.rawg.io/ +crop/600/400/, url.slice(index) take the right side item after media/
}
export default getCroppedImageUrl;
// example, https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
// url.slice(0,index)= https://media.rawg.io/media/ + crop/600/400/+ games/456/456dea5e1c7e3cd07060c14e96612001.jpg
//https://media.rawg.io/media/crop/600/400/games/456/456dea5e1c7e3cd07060c14e96612001.jpg