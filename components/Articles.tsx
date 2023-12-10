import React from 'react'
import Link from 'next/link'


const  Articles = [
    {
      id: 1,
      title: "Managing Cookies and Ensuring User Privacy Compliance.",
      date: "Nov 18, 2023",
      link: "https://ese-monday.hashnode.dev/managing-cookies-and-ensuring-user-privacy-compliance",
    },
    {
      id: 2,
      title: "Crafting Eye-Catching READMEs with Git Hub and Markdown Techniques",
      date: "Feb 16, 2023",
      link: "https://ese-monday.hashnode.dev/crafting-eye-catching-readmes-with-git-hub-and-markdown-techniques",
    },
    {
      id: 3,
      title: "CSS Reset: The Importance of Starting with a Clean Slate",
      date: "Feb 3, 2023",
      link: "https://ese-monday.hashnode.dev/css-reset-the-importance-of-starting-with-a-clean-slate",
    },
    {
      id: 4,
      title: "A Comprehensive Guide to Understanding OOP Principles - Encapsulation, Abstraction, Polymorphism and Inheritance",
      date: "Jan 30, 2023",
      link: "https://ese-monday.hashnode.dev/a-comprehensive-guide-to-understanding-oop-principles-encapsulation-abstraction-polymorphism-and-inheritance",
    },
   
  ]

const ArticlesPage = () => {
  return (
    <div className='my-40'>
        <p className='text-2xl mt-16 text-white  font-semibold text-left '>Recent Articles </p>
        <div className='flex flex-col gap-4 mt-12'>
                    
                    {Articles.map((article) =>(
                      <div className='border-b-white/60 border-b-[1px] py-2' key={article.id}>
                        
                          <div className='flex  justify-center flex-col'>
                          <Link  href={article.link} target='_blank' className='text-lg font-semibold text-white/80 hover:text-violet-red-400/80 text-justify'>{article.title}</Link>
                          <h3 className='text-md mt-2 text-start text-white/60'>{article.date}</h3>
                          </div>

                      </div>
                    ))}
                    

                    <div className='flex '>
                      <Link href="https://ese-monday.hashnode.dev/" className='text-sm text-white/60 hover:underline hover:text-violet-red-400  mt-2 whitespace-nowrap'>Read more</Link>

                    </div>
                   
                  </div>
    </div>
   
  )
}

export default ArticlesPage