import "./css/FoodGallery.css";
import FoodCard from "./fragments/FoodCard";

const FoodGallery = () => {
  return (
    <div className="food-gallery">
      <FoodCard
        menu="MURAH MERIAH"
        description="Paket Murah Tapi Meriah : Ayam Bumbu Kecap, Sambal, Daun Singkong."
        price="15.000"
        img="/rice-box/resources/images/assets/menu-item.png"
        href="https://api.whatsapp.com/send?phone=62895391011797&text=Hi%2C%20Rice%20Box.%20Saya%20Ingin%20Memesan%20Paket%20Murah%20Meriah%20untuk%20%7BMasukan%20Jumlah%20Porsi%20-%20Minimal%2015%7D%20untuk%20Tanggal%20%7BMasukan%20Deadline%20-%20Minimal%2012%20Jam%7D%2C%20Terima%20kasih."
      />
      <FoodCard
        menu="MURAH MURAH WAH"
        description="Paket Murah Tapi Wah : Ayam Bumbu Kecap / Goreng, Sambal, Daun Singkong, Mie Goreng."
        price="25.000"
        img="/rice-box/resources/images/assets/menu-item.png"
        href="https://api.whatsapp.com/send?phone=62895391011797&text=Hi%2C%20Rice%20Box.%20Saya%20Ingin%20Memesan%20Paket%20Murah%20Murah%20Wah%20untuk%20%7BMasukan%20Jumlah%20Porsi%20-%20Minimal%2015%7D%20untuk%20Tanggal%20%7BMasukan%20Deadline%20-%20Minimal%2012%20Jam%7D%2C%20Terima%20kasih."
      />
      <FoodCard
        menu="MURAH MEWAH"
        description="Paket Murah Tapi Mewah : Semua Menu Sebelumnya,Pecai,Sambal Goreng Kentang."
        price="35.000"
        img="/rice-box/resources/images/assets/menu-item.png"
        href="https://api.whatsapp.com/send?phone=62895391011797&text=Hi%2C%20Rice%20Box.%20Saya%20Ingin%20Memesan%20Paket%20Murah%20Wah%20untuk%20%7BMasukan%20Jumlah%20Porsi%20-%20Minimal%2015%7D%20untuk%20Tanggal%20%7BMasukan%20Deadline%20-%20Minimal%2012%20Jam%7D%2C%20Terima%20kasih."
      />
      <FoodCard
        menu="MEWAH DAN WAH"
        description="Paket Si Paling Mewah : Semua Menu Sebelumnya, Hati Sapi, Beverage (Teh Poci)"
        price="50.000"
        img="/rice-box/resources/images/assets/menu-item.png"
        href="https://api.whatsapp.com/send?phone=62895391011797&text=Hi%2C%20Rice%20Box.%20Saya%20Ingin%20Memesan%20Paket%20Mewah%20dan%20Wah%20untuk%20%7BMasukan%20Jumlah%20Porsi%20-%20Minimal%2015%7D%20untuk%20Tanggal%20%7BMasukan%20Deadline%20-%20Minimal%2012%20Jam%7D%2C%20Terima%20kasih."
      />
    </div>
  );
};

export default FoodGallery;
