import { NextResponse } from 'next/server'


export async function middleware(request) {
    console.log('midddleware Executed');
    const token=request.cookies.get('authToken')?.value;
    const pathName=request.nextUrl.pathname==='/login' || request.nextUrl.pathname==='/signup';
    if(pathName){
        if(token){
            return NextResponse.redirect(new URL('/profile', request.url));
        }
        
    }else{
         if(!token){
            return NextResponse.redirect(new URL('/login',request.url));
         }
    }

    

}
 

export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/addTask',
    '/myTask',
    '/profile',
    
]
}