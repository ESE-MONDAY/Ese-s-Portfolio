import React, {useState} from 'react'
//import useCookie hook from next-cookie
import { useCookie } from 'next-cookie';
import Link from 'next/link';


const CookiesConsent = () => {
    const oneMonth = 30 * 24 * 60 * 60 * 1000; 
     // Expiration date of one month
    const expirationDate = new Date(Date.now() + oneMonth);
    const cookie = useCookie();
    //Fetch cookie value from cookies of the user web browser
    const consent: boolean = cookie.get("cookie-consent") ;
    // accepted state to conditionally render cookie consent component
    const [accepted, setAccepted] = useState<boolean>(consent);

   
//Function to accept cookie
    const acceptCookies = () => {
        cookie.set(
            "cookie-consent", true, {
            httpOnly: false,
            secure: true,
            sameSite: "strict",
            expires: expirationDate,
            path: "/",
          });
       
        setAccepted(true);
      };
//Function to decline cookie
const declineCookies = () => {
  cookie.set(
    "cookie-consent", false, {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    expires: expirationDate,
    path: "/",
  });
  setAccepted(false);
};


   
    if (accepted !== undefined) {
        return null; // The banner is hidden once the user accepts or decline cookies
      }
  return (
    <div className='fixed bottom-0 left-0 w-full p-4 bg-black/50 text-white'>
        <p className='text-md font-satoshiMedium text-center'>This site uses cookies to offer you a better browsing experience. For further information on how we use cookies you can read our <Link href="/policy"   target='blank' className='underline text-sm'>Cookies & Privacy Policie</Link> </p>
        <div className='mt-1 flex justify-center gap-4'>    
        <button className='bg-blue-600 rounded-md text-sm text-white px-4 py-2 hover:scale-105 hover:text-gray-200' onClick={acceptCookies}>Accept Cookies</button>
        <button className='bg-red-500 rounded-md text-sm text-white px-4 py-2 hover:scale-105 hover:text-gray-200' onClick={declineCookies}>
          Decline Cookies
        </button>
        
        </div>

    </div>
  )
}

export default CookiesConsent;