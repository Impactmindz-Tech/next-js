"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const router = usePathname();
    const links = [
        {
            name: 'Dashboard', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAATBJREFUOE/lVbFVw0AM/brGJdkANsAUPFKRYwLYAJsNmACzARMkxwbJBBxdeBSYDZIN3Lo5oYtjni/PhxvTgCpblr/070s6ylI9UQkvGLhBaBsiepyvrem676Y6Y+YH8Z10/QQsXU055ReXS4CuD8C+X9nRmXm3pXdk5zolxR+xWIBXAjiT4uJGoPv5m33yEVJdsa8u+sMwYEO7+FuAldA5ih2KKJ23Su8VXvxw5FsaCPrkmrQprU8K32KUsJXH0z5Qn1zaRwKnWitAB0GMytUwLVj7relbZCBMuvEOsGZt7Q5wTPsdQE8Zzs2CSgkVavXcRxmJuwWHlKHU647ygCiliHJ1IMqLJE6josjojdk2m386emOvr5EXbDOfzvRs7a3MZhG5Avx+PA5bh1dcq+wLsL3WcsbKyhIAAAAASUVORK5CYII=', to: '/admin/dashboard'
        },
        {
            name: 'Clients', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUUlEQVR4nO2Uv0oDQRDGDwtTaqmk1iKNRcjMFjojweJeQLExN9OkcvMKdtqI4gNp6Z8qwQfQRoyVIpFYKuupAZHcnm6Myn3wwXG38OPbmfuiqNBvlI3jkiK1BOhUkR6c3XNi2LpvI4E2TL0sSB1Ffvrc1HZngkJtHJeGQwfwoMkVqZUNTS3Am8HAAnzmC1akk4Bg6vknpl4wsHqnTT2WxIp8//dnnBi2Y9lqmzZW2+c/Xq1UJqOQaph6eTh8BM31JpfGXaWbo1u4FyMfu3fBkxb6UW1F0UQCbARoR5CPFKmrQI/OgnytyIeKtK24jO7st4HN6tKsIO0J0E2OAukK8G5S45ncwGSBpwX4QIH7eXv63cB9QdpvVlemvKAbtcV5Bbr8MvBjkyFfCNJcJliBz0NBB3DqZIJflyUoWIGusueLvK5Id+GgfKuG1rzmXOhf6RlDPd7XAqNPLQAAAABJRU5ErkJggg==', to: '/admin/client'
        },
        {
            name: 'Service Providers', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAaCAYAAABPY4eKAAAABHNCSVQICAgIfAhkiAAAA/lJREFUSEvFVk1vE0kQrWqzIdIeMAcESEhJpJU47CFjCexIkGRYrcRlBc6Bw0orZSbsag8cCAdOSMT8AswfiI3Efb2/gElOcThgfsE6vwAjIS0G3MWr8XQ8HvxBACmWLHm6e+pVvfeq2kzH+OFjxKbvCh4s+fPMPKcFichBfS9qTyruSOCB5+fjYDP2bn1/91FYWu0Icxkg0UbJ3xSSxxmwCPvhuCSmgm8s+RXbo4bJUVnEesJmk0X+ky6f5pMSodLG9l5UCS77Hht5OaJSTbAwKoGp4GFppUFk2sLUAGij1tzJo2I8c8BCZWbqKLiCKhOEZMD5Or47+L2K5VdI1K+3ok42sangQdEHgGwBtBCDdtnjk1QRoUiDGUPeAByJsukA2CdCEiRlPe+A4QmfetSpv4ha+u5n4GoaHMi7A0lFbYDPhyW/qgxgTY2k5zpseE4szIWASj3lKG+wB8NtiuXAxVH5sHYXMj1xyR6Ch4XlMzRzYo3JVoToPF4suBe1ehJqx0DS8xAAlZGHb2xAPD/SgMoMHk8haGSFn9b3I000/qhZ4ZHXelY9pLEPwTeWrv4q1pQAvIADt3G+pVQfaomgI8wUL+F8aN/BEwjuzjDxve1mVE2/o7RrZwzOpHaDS6v3yciPCLaM5V8GFanp+OYY8AOVJJbL2vWEFR+GXDhSn/91+frPXfn/ljlhZuHsAGBnlX76AMrRVnhezCTwBvu+UghNA2haS/bjhIaqBu1Zx39muLC4si5k5jEwLhimP9P0xwBEPirEJDMN26W6C5iAK82Qh5/UmtGmA9cBBGvnndFG0u4W14srD5jMD0xyAy8VsvqFS34d7bSI9adO1z44vxaWN/SOWkNJWRuIMUFWhpF9vlG8csma3G9kaRYa3kFSH9NTKnE1ZvigwsEaDVGu7Ulk56UL8MygGTtkbhdX/u6ROQcdf8Ig+QMJRNDxWuz+fuXxFKvt7/qujfrMyb+15m7ZsZhMQ3V5O2vYiRMuLC0/JM5Z9DjA5aKjP5l6/zg/aAvBoM81uLYdtK3rb5UCPd1KD6x0AhPB46AWPn8vzcTtcxiXCzFI0tNgg9NO1wsnpXcla7IvBh9qFb2rRXQqPd9u7qz1Lxy+mYDr6NzC+Vd49vo6yyLa8N64quMCsjpMenZ0w9Vr8EFe+1rnALOt6g2mstjk9kMczIRh/Y+k+ahEkopXzfucZ2d6erVeAyOq8ZxONVRTwbetTOheepx+M3ji7Hb/3rZ5/LmoJmY7iO94aysORDthEpNHot0FSq7HLSH+nQ29JSvP4PKq/tOBknoB+elbcVwCXwUe/5ebJS9LaeIJ1T+q7UXBND99Ffi0oF+6f6zgnwA4rzE5RdBD4AAAAABJRU5ErkJggg==', to: '/admin/service_providers'
        },
        {
            name: 'Appointments', src: 'http://beautyspot.codingcopz.in/static/media/appointmnets.9157ecf9f74699926ed17c137f004a4c.svg', to: '/admin'
        },
        {
            name: 'Transactions', src: 'http://beautyspot.codingcopz.in/static/media/transactions.eac4401ce631393b05d8d72d559d334d.svg', to: '/admin'
        },
    ];
    return (
        <>
                    <div className='w-52 main_sidenav h-full flex flex-col bg-primary-500 py-5 pl-5 relative duration-300 z-10'>
                        <div className='flex justify-center'>
                            <img className='block p-1 bg-primary-900 cursor-pointer w-14 rounded-full  false' src='http://beautyspot.codingcopz.in/static/media/logo.79a04e716a5ee4efc741.png' />
                        </div>
                        <ul className='mt-4 overflow-y-scroll no-scrollbar'>
                            {links.map((item, i) => (
                                <li key={i} className='p-3 bg-white my-2 rounded-xl flex items-center'>
                                    <img className='w-4 h-4' src={item.src} alt='' />
                                    <Link className={`${router === item.to ? 'link_active' : '' } false 2xl:text-sm ml-2 cursor-pointer text-[#8f6a70] font- text-xs origin-left duration-200`} href={item.to}>
                                    {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
        </>
    );
};

export default Sidebar;
