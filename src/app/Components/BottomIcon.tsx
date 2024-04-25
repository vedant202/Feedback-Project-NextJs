"use client"

import React, { useEffect, useState } from 'react'
import IssueDialog from './IssueDialog'
export function Icon(){
    return (
      <>
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_1_2421)">
  <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8"/>
  <g clip-path="url(#clip0_1_2421)">
  <path d="M44.7452 22H27.323C26.04 22 25 23.04 25 24.323V49.8755C25 51.1584 26.04 52.1984 27.323 52.1984H44.7452C46.0281 52.1984 47.0682 51.1584 47.0682 49.8755V24.323C47.0682 23.04 46.0281 22 44.7452 22Z" fill="#0F0F0F"/>
  <path d="M28.4844 28.9692L42.4222 28.9692" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round"/>
  <path d="M28.4844 33.6147H42.4222" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round"/>
  <path d="M28.4844 38.2607H42.4222" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round"/>
  <path d="M28.4844 42.9067H35.4533" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round"/>
  <path d="M50.2995 35.6118L41.5793 50.7155L41.9482 55.0538C42.0167 55.8594 42.8669 56.3503 43.5989 56.0068L47.5404 54.1571L56.2606 39.0535C56.902 37.9424 56.5214 36.5217 55.4103 35.8803L53.4727 34.7616C52.3616 34.1201 50.9409 34.5008 50.2995 35.6118Z" fill="#0F0F0F" stroke="#F8F8F8" stroke-width="1.16148" stroke-linecap="round"/>
  </g>
  </g>
  <defs>
  <filter id="filter0_d_1_2421" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="1" dy="1"/>
  <feGaussianBlur stdDeviation="4"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2421"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2421" result="shape"/>
  </filter>
  <clipPath id="clip0_1_2421">
  <rect width="32" height="34" fill="white" transform="translate(25 22)"/>
  </clipPath>
  </defs>
  </svg>
  
      </>
    )
  }

export function ContactUsIcon(){
    return(
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_6770_3514)">
<rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8"/>
<g clip-path="url(#clip0_6770_3514)">
<path d="M25.9789 23.0396C25.6973 23.0829 25.1285 23.2888 24.8144 23.4513C24.3864 23.6788 23.6769 24.3883 23.4494 24.8163C23.3573 24.995 23.2219 25.3092 23.1514 25.5204L23.0269 25.8996V30.4767C23.0269 35.4329 23.0214 35.2975 23.3248 35.98C23.7202 36.8575 24.6302 37.67 25.4752 37.8921L25.7027 37.9517L25.7189 39.0783C25.7352 40.3296 25.7677 40.4433 26.1035 40.6546C26.3202 40.79 26.6777 40.8062 26.8889 40.6925C26.9702 40.6492 27.6094 40.0371 28.3081 39.3383L29.581 38.06H29.8302H30.0848L30.1119 36.7979C30.1335 35.7092 30.1498 35.4871 30.2527 35.1404C30.7781 33.3583 32.0998 32.0367 33.8873 31.495C34.2881 31.3758 34.326 31.3758 38.1556 31.3542L42.0123 31.3379V28.7C42.0123 25.8075 42.0014 25.6883 41.6819 25.0221C41.346 24.3179 40.7664 23.7383 40.0352 23.3754C39.2498 22.9854 39.5748 23.0017 32.4789 23.0125C28.9798 23.0125 26.0548 23.0288 25.9789 23.0396Z" fill="black"/>
<path d="M34.3314 33.0772C33.1072 33.3967 32.1431 34.3772 31.8235 35.6121C31.726 35.9967 31.7206 36.2459 31.7206 40.4438C31.7206 43.3309 31.7422 44.9776 31.7802 45.1888C31.8072 45.3621 31.9481 45.7413 32.0835 46.023C32.506 46.895 33.2643 47.545 34.2393 47.8755L34.6185 48L39.3852 48.0163L44.1518 48.0325L45.4789 49.3488C46.8927 50.7571 46.9522 50.8005 47.3693 50.7084C47.5589 50.6705 47.8297 50.4592 47.9327 50.2805C47.976 50.2046 48.0085 49.7821 48.0247 49.0346L48.0518 47.9025L48.2685 47.8375C48.6314 47.7292 49.1352 47.4475 49.4818 47.1605C50.0939 46.6513 50.5597 45.8117 50.6789 45.0155C50.7114 44.7934 50.7331 42.9138 50.7331 40.3896C50.7331 35.6338 50.7385 35.7096 50.3593 34.9459C49.9964 34.2147 49.4168 33.6351 48.7127 33.2992C47.9977 32.958 48.3064 32.9688 41.1997 32.9742C35.0031 32.9742 34.7106 32.9797 34.3314 33.0772Z" fill="black"/>
<path d="M41.6363 41.1736C41.5906 41.1829 41.5496 41.2077 41.5201 41.2438C41.4906 41.2799 41.4745 41.3251 41.4745 41.3717V41.8067C41.4745 41.8872 41.4426 41.9643 41.3857 42.0212C41.3288 42.0781 41.2516 42.11 41.1712 42.11C41.0907 42.11 41.0136 42.0781 40.9567 42.0212C40.8998 41.9643 40.8679 41.8872 40.8679 41.8067V40.9327C40.8679 40.856 40.897 40.7821 40.9493 40.7259C41.0017 40.6698 41.0734 40.6356 41.1499 40.6302C41.5095 40.6051 42.0383 40.4826 42.4674 40.209C42.8862 39.9416 43.1934 39.5447 43.1934 38.9443C43.1934 38.3659 42.9788 37.9649 42.6672 37.699C42.3481 37.4266 41.904 37.2774 41.4272 37.2588C40.4402 37.2202 39.5203 37.7259 39.3439 38.5134C39.3264 38.5919 39.2783 38.6602 39.2104 38.7033C39.1424 38.7464 39.0602 38.7607 38.9816 38.7432C38.9031 38.7256 38.8348 38.6776 38.7917 38.6096C38.7486 38.5417 38.7343 38.4594 38.7518 38.3809C38.8865 37.7795 39.275 37.3393 39.7779 37.0511C40.2834 36.7613 40.8964 36.6309 41.4511 36.6527C42.031 36.6754 42.6158 36.8576 43.0611 37.2376C43.5141 37.6242 43.8 38.1969 43.8 38.9443C43.8 39.8013 43.341 40.3712 42.7938 40.7204C42.4233 40.9568 42.0049 41.0987 41.6363 41.1736ZM40.6656 43.6267C40.6656 43.4658 40.7295 43.3115 40.8433 43.1977C40.9571 43.0839 41.1114 43.02 41.2723 43.02C41.4332 43.02 41.5875 43.0839 41.7013 43.1977C41.815 43.3115 41.8789 43.4658 41.8789 43.6267C41.8789 43.7876 41.815 43.9419 41.7013 44.0557C41.5875 44.1694 41.4332 44.2333 41.2723 44.2333C41.1114 44.2333 40.9571 44.1694 40.8433 44.0557C40.7295 43.9419 40.6656 43.7876 40.6656 43.6267Z" fill="#F8F8F8" stroke="#F8F8F8" stroke-width="0.404439" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<filter id="filter0_d_6770_3514" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6770_3514"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6770_3514" result="shape"/>
</filter>
<clipPath id="clip0_6770_3514">
<rect width="27.7333" height="27.7333" fill="white" transform="translate(23 23)"/>
</clipPath>
</defs>
</svg>

    )
}

export function GiveSuggestion(){
    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_6770_3508)">
<rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8"/>
<path d="M24 27V30.5756H43.6658V27H24ZM24 34.1512V37.7268H43.6658V34.1512H24ZM54.3926 34.33C54.2138 34.33 53.8562 34.5088 53.6775 34.6875L51.8897 36.4753L55.644 40.2297L57.4318 38.4419C57.7894 38.0843 57.7894 37.3692 57.4318 37.0117L55.1077 34.6875C54.9289 34.5088 54.7501 34.33 54.3926 34.33ZM50.9958 37.548L40.0902 48.2748V52.0292H43.8446L54.7501 41.1236L50.9958 37.548ZM24 41.3024V44.878H36.5146V41.3024H24Z" fill="#0F0F0F"/>
</g>
<defs>
<filter id="filter0_d_6770_3508" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6770_3508"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6770_3508" result="shape"/>
</filter>
</defs>
</svg>

    )
}

export function FeedbackIcon(){
    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_6770_3489)">
<rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8"/>
<path d="M45.7269 52.7216C46.2761 52.5772 46.4627 52.1301 46.519 50.7994C46.5437 50.303 46.5718 50.0073 46.6246 49.796C46.7197 49.4053 47.0154 48.8068 47.3182 48.4054C47.7406 47.8421 48.5715 47.0747 49.2192 46.6452L49.3706 46.5466V41.8925V37.2348L48.9798 37.0693C47.9378 36.6293 46.5824 36.2737 45.1636 36.0695C44.118 35.9181 43.4421 35.8794 41.8544 35.8759C40.3828 35.8724 40.3335 35.8759 40.0659 35.9533C39.0274 36.2526 38.267 36.9778 37.9677 37.9495C37.9255 38.0833 37.6896 39.3436 37.4432 40.7483C37.0172 43.1951 36.9996 43.3218 36.9996 43.7759C37.0031 44.1878 37.0172 44.2935 37.0982 44.5681C37.3728 45.4764 38.01 46.184 38.8655 46.5255C39.3618 46.7261 39.4745 46.7332 41.5903 46.7332H43.5195L43.3963 47.0782C43.1112 47.8773 42.9844 48.6554 42.9844 49.62C42.9844 50.3664 43.0232 50.6163 43.1992 51.0564C43.3541 51.4472 43.5231 51.7006 43.8399 52.014C44.1532 52.3273 44.4454 52.5104 44.8538 52.6512C45.0756 52.7286 45.5579 52.7674 45.7269 52.7216Z" fill="#0F0F0F"/>
<path d="M54.0923 47.2406C54.476 47.1244 54.814 46.7794 54.9337 46.3816C55.0041 46.1563 55.0041 46.0647 54.997 41.5937L54.9865 37.0346L54.8703 36.7987C54.7295 36.51 54.4513 36.246 54.1662 36.1298C53.969 36.0488 53.9409 36.0488 52.7509 36.0488C51.561 36.0488 51.5329 36.0488 51.3357 36.1298C51.0506 36.246 50.7724 36.51 50.6316 36.7987L50.5154 37.0346L50.5049 41.5937C50.4978 46.0647 50.4978 46.1563 50.5682 46.3816C50.6915 46.7899 51.0259 47.1244 51.4237 47.2441C51.6772 47.318 53.8493 47.318 54.0923 47.2406Z" fill="#0F0F0F"/>
<path d="M28.2731 21.2784C27.7239 21.4228 27.5373 21.8699 27.481 23.2006C27.4563 23.697 27.4282 23.9927 27.3754 24.204C27.2803 24.5947 26.9846 25.1932 26.6818 25.5946C26.2594 26.1579 25.4285 26.9253 24.7808 27.3548L24.6294 27.4534V32.1075V36.7652L25.0202 36.9307C26.0622 37.3707 27.4176 37.7263 28.8364 37.9305C29.882 38.0819 30.5579 38.1206 32.1456 38.1241C33.6172 38.1276 33.6665 38.1241 33.9341 38.0467C34.9726 37.7474 35.733 37.0222 36.0323 36.0505C36.0745 35.9167 36.3104 34.6564 36.5568 33.2517C36.9828 30.8049 37.0004 30.6782 37.0004 30.2241C36.9969 29.8122 36.9828 29.7065 36.9018 29.4319C36.6272 28.5236 35.99 27.816 35.1345 27.4745C34.6382 27.2739 34.5255 27.2668 32.4097 27.2668H30.4805L30.6037 26.9218C30.8888 26.1227 31.0156 25.3446 31.0156 24.38C31.0156 23.6336 30.9768 23.3837 30.8008 22.9436C30.6459 22.5528 30.4769 22.2994 30.1601 21.986C29.8468 21.6727 29.5546 21.4896 29.1462 21.3488C28.9244 21.2714 28.4421 21.2326 28.2731 21.2784Z" fill="#0F0F0F"/>
<path d="M19.9077 26.7594C19.524 26.8756 19.186 27.2206 19.0663 27.6184C18.9959 27.8437 18.9959 27.9353 19.003 32.4063L19.0135 36.9654L19.1297 37.2013C19.2705 37.49 19.5487 37.754 19.8338 37.8702C20.031 37.9512 20.0591 37.9512 21.2491 37.9512C22.439 37.9512 22.4671 37.9512 22.6643 37.8702C22.9494 37.754 23.2276 37.49 23.3684 37.2013L23.4846 36.9654L23.4951 32.4063C23.5022 27.9353 23.5022 27.8437 23.4318 27.6184C23.3085 27.2101 22.9741 26.8756 22.5763 26.7559C22.3228 26.682 20.1507 26.682 19.9077 26.7594Z" fill="#0F0F0F"/>
</g>
<defs>
<filter id="filter0_d_6770_3489" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6770_3489"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6770_3489" result="shape"/>
</filter>
</defs>
</svg>

    )
}

export function FlagIcon(){
    return(
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_6770_3483)">
<rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8"/>
<path d="M26.4536 38.002V50.002H28.1567H28.8599V45.6285V41.2504L29.2208 41.0723C31.4661 39.9801 34.0021 39.8676 36.2661 40.7676C36.5286 40.8707 37.1896 41.1848 37.7333 41.466C38.2817 41.7473 38.938 42.0613 39.2005 42.1645C41.4411 43.0551 43.8036 43.1254 46.0864 42.3707C46.5083 42.2301 47.0614 41.9957 47.6333 41.7051L48.5239 41.2598L48.538 34.0785L48.5474 26.8973L47.9755 27.2301C46.0208 28.3504 44.6567 28.7676 42.9224 28.7676C42.1255 28.7676 41.4646 28.6832 40.7239 28.4816C39.9599 28.2801 39.4864 28.0832 38.1646 27.4082C36.9317 26.7848 36.3692 26.5598 35.4505 26.3301C34.0255 25.9691 32.3942 25.9504 30.9364 26.2785C30.3974 26.4004 29.713 26.616 29.2302 26.8223L28.8599 26.977V26.4895V26.002H28.1567H26.4536V38.002Z" fill="#0F0F0F"/>
</g>
<defs>
<filter id="filter0_d_6770_3483" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6770_3483"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6770_3483" result="shape"/>
</filter>
</defs>
</svg>

    )
}

export function CancelIcon(){
    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2665)">
<rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8"/>
<path d="M26.9998 27.0015L46.9998 47.0009M26.9998 47.0009L46.9998 27.0015" stroke="#0F0F0F" stroke-width="3.99994" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_2665" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2665"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2665" result="shape"/>
</filter>
</defs>
</svg>

    )
}

export default function BottomIcon() {

    const [isHover, setIsHover] = useState(false)
    const [isHover2, setIsHover2] = useState(false)

    const handleClick = ()=>{
        console.log("clicked")
      }
   
  return (
    <div  className='float-end  w-[28rem] bg-green-200'>
        
    <div className="absolute right-0 bottom-0">
        <div>
        <div className='w-[100%]'>
            {
                isHover2?<IssueDialog />:null
            }
        </div>
        </div>
        <div>
        {
            !isHover?(<div onClick={()=>{setIsHover(true)}} ><Icon ></Icon></div>):
            (<>
                <ContactUsIcon />
                <GiveSuggestion />
                <FeedbackIcon />
                <div className='w-[100%]' onClick={()=>{setIsHover2(prev=>!prev)}}>
                
                    <FlagIcon />
                </div>
                <div onClick={()=>{
                    setIsHover2(false)
                    setIsHover(false)}}>
                <CancelIcon />
                </div>
            </>)
        }
        </div>
      </div>
      </div>
  )
}
