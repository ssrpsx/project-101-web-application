import React from 'react'
import Image1 from '../../assets/SlideImages/The-Return-of-the-Disaster-Class-Hero-2.jpg'
import Image2 from '../../assets/SlideImages/Swordmasters-Youngest-Son-2.jpg'
import Image3 from '../../assets/SlideImages/Return-of-the-Frozen-Player-1.jpg'
import Image4 from '../../assets/SlideImages/Return-of-the-Flowery-Mountain-Sect-.jpg'
import Image5 from '../../assets/SlideImages/Mercenary-Enrollment.jpg'
import Image6 from '../../assets/SlideImages/Life-of-a-Magic-Academy-Mage.jpg'
import Image7 from '../../assets/SlideImages/Infinite-Mage.jpg'
import Image8 from '../../assets/SlideImages/Duke-Pendragon-Master-of-the-White-Dragon-Up-Manga.jpg'
import Image9 from '../../assets/SlideImages/Damn-Reincarnation.jpg'
import Slider from 'react-slick'

const data = [
    {
        id : 1,
        name : "The Return of the Disaster Class Hero",
        desciption : "เรื่องย่อ : เมื่อฮีโร่ระดับต่ำที่สุด แบค ยูซอล ถูกหักหลังโดยเหล่าฮีโร่คนอื่น เขากลับมาอีกครั้งในฐานะผู้ที่จะแก้แค้นพวกทรยศเหล่านั้น และเผยความจริงเกี่ยวกับเทพและโลกที่ถูกทำลาย เพื่อยุติวงจรที่ผิดพลาด",
        link : "/#",
        img : Image1
    },
    {
        id : 2,
        name : "Swordmaster is Youngest Son",
        desciption : "เรื่องย่อ : จิน โรุนเดล — ลูกชายคนสุดท้องของตระกูลนักดาบผู้ยิ่งใหญ่ ถูกมองข้ามเพราะไม่มีพลังเวท เขาได้โอกาสกลับมาเกิดใหม่และตัดสินใจเปลี่ยนชะตาของตนเอง พร้อมพลิกโฉมตระกูลและโลกแห่งดาบและเวทมนตร์",
        link : "/#",
        img : Image2
    },
    {
        id : 3,
        name : "Return of the Frozen Player",
        desciption : "เรื่องย่อ : ผู้เล่นระดับ S ที่ถูกแช่แข็งหลังปราบบอสขั้นสุดท้าย กลับฟื้นขึ้นมาในอีกหลายปีต่อมา พบว่าโลกและระบบเกมได้เปลี่ยนไปหมด เขาต้องต่อสู้เพื่อทวงตำแหน่งและความจริงกลับคืนมา",
        link : "/#",
        img : Image3
    },
    {
        id : 4,
        name : "Return of the Flowery Mountain Sect",
        desciption : "เรื่องย่อ : ผู้นำแห่งนิกายฮวาซานในอดีต ฟื้นคืนชีพมาในยุคใหม่ที่นิกายของเขาล่มสลาย เขาจะก่อตั้งมันขึ้นใหม่และนำชื่อเสียงของ ดอกไม้แห่งภูเขา กลับคืนสู่ยุทธภพ",
        link : "/#",
        img : Image4
    },
    {
        id : 5,
        name : "Mercenary Enrollment",
        desciption : "เรื่องย่อ : ยูอิจิน รอดชีวิตจากอุบัติเหตุเครื่องบินตกและกลายเป็นทหารรับจ้าง หลังจากใช้ชีวิตในสนามรบมานาน เขากลับมาใช้ชีวิตวัยเรียนอีกครั้ง…แต่ยังคงทักษะทหารไว้ พร้อมปกป้องครอบครัวและคนที่รักจากทุกภัยคุกคาม",
        link : "/#",
        img : Image5
    },
    {
        id : 6,
        name : "Life of a Magic Academy Mage",
        desciption : "เรื่องย่อ : เรื่องราวของเด็กชายที่เกิดมาในโลกเวทมนตร์ และได้รับโอกาสเรียนที่สถาบันเวทที่ดีที่สุด ชีวิตของเขาจะเปลี่ยนไปอย่างไร เมื่อความลับบางอย่างเริ่มถูกเปิดเผย?",
        link : "/#",
        img : Image6
    },
    {
        id : 7,
        name : "The Infinite Mage",
        desciption : "เรื่องย่อ : เด็กชายที่เกิดในหมู่บ้านยากจนใฝ่ฝันจะเป็นจอมเวท แม้จะไร้พรสวรรค์ เขากลับมีบางสิ่งที่ไม่มีใครคาดคิด การเรียนรู้ที่ไร้ขีดจำกัดจะทำให้เขาทะลุขอบเขตของเวทมนตร์ที่มนุษย์เคยรู้จัก",
        link : "/#",
        img : Image7
    },
    {
        id : 8,
        name : "Duke Pendragon: Master of the White Dragon Archives",
        desciption : "เรื่องย่อ : นักรบผู้ยิ่งใหญ่ที่ได้รับมอบหมายให้ปกป้องความลับของมังกรขาว หลังจากย้อนเวลากลับไป เขาจะใช้ความรู้จากอนาคตเพื่อปกป้องอาณาจักรและหยุดยั้งหายนะที่จะมาถึง",
        link : "/#",
        img : Image8
    },
    {
        id : 9,
        name : "Damn Reincarnation",
        desciption : "เรื่องย่อ : ฮีโร่ผู้เสียสละตัวเองเพื่อหยุดจอมมาร กลับชาติมาเกิดใหม่พร้อมกับความทรงจำเดิม คราวนี้ เขาจะไม่ยอมแพ้ต่อโชคชะตาอีก และจะกลายเป็นวีรบุรุษที่แท้จริงในโลกใบนี้",
        link : "/#",
        img : Image9
    },
]

function SlideImage() {
  return (
    <div>
        <div>
            {data.map((dataimage) =>(
                <a href={dataimage.link} key={dataimage.id}>
                    <img src={dataimage.img} alt={dataimage.name} />
                    <h1>{dataimage.name}</h1>
                    <span>{dataimage.desciption}</span>
                </a>
            ))}
        </div>
        <div>
            <button></button>
        </div>
    </div>
  )
}

export default SlideImage