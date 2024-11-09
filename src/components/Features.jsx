import React from 'react';

const Features = () => {
  return (
    <section id='features' className='pb-10'> {/* Added bottom padding */}
  {/* Flex Container */}
  <div className='container flex flex-col px-4 mx-auto mt-10 space-y-8 md:space-y-0 md:flex-row'>
    {/* What's Different */}
    <div className='flex flex-col space-y-6 md:w-1/2'> {/* Reduced space between heading and paragraph */}
      <h2 className='max-w-md pt-5 text-4xl text-white font-bold text-center md:text-left'>
        What's different about CampusSync?
      </h2>
      <p className='max-w-sm pt-10 text-[18px] text-center text-darkGrayishBlue md:text-left'>
        CampusSync stands out by specifically addressing the unique file and inventory management needs within an educational institution like IIIT Bhubaneswar.
      </p>
    </div>

    {/* Numbered List */}
    <div className='flex flex-col space-y-6 md:w-1/2'> {/* Reduced space between list items */}
      {/* List Item 1 */}
      <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row p-6 rounded-lg shadow-lg'>
        {/* Heading */}
        <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
          <div className='flex items-center space-x-2'>
            <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed shadow-md'>
              01
            </div>
            <h3 className='text-base font-bold md:mb-4 md:hidden text-white'>
              Focused on Inventory Workflow
            </h3>
          </div>
        </div>

        <div>
          <h3 className='hidden mb-4 text-lg font-bold md:block text-white'>
            Focused on Inventory Workflow
          </h3>
          <p className='text-gray-300'>
            Unlike generic inventory or file management systems, CampusSync is designed to handle the intricacies of a campus environment, streamlining file movements specific to departments, faculty, administration, and students.
          </p>
        </div>
      </div>

      {/* List Item 2 */}
      <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row p-6 rounded-lg shadow-lg'>
        {/* Heading */}
        <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
          <div className='flex items-center space-x-2'>
            <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed shadow-md'>
              02
            </div>
            <h3 className='text-base font-bold md:mb-4 md:hidden text-white'>
              Real-Time Transparency
            </h3>
          </div>
        </div>

        <div>
          <h3 className='hidden mb-4 text-lg font-bold md:block text-white'>
            Real-Time Transparency
          </h3>
          <p className='text-gray-300'>
            The system offers real-time updates on file locations and inventory status, which is crucial for maintaining accountability. Departments can instantly see where a file or inventory item is, promoting a transparent, collaborative environment.
          </p>
        </div>
      </div>

      {/* List Item 3 */}
      <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row p-6 rounded-lg shadow-lg'>
        {/* Heading */}
        <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
          <div className='flex items-center space-x-2'>
            <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed shadow-md'>
              03
            </div>
            <h3 className='text-base font-bold md:mb-4 md:hidden text-white'>
            Seamless File Movement Across Departments
            </h3>
          </div>
        </div>

        <div>
          <h3 className='hidden mb-4 text-lg font-bold md:block text-white'>
          Seamless File Movement Across Departments          </h3>
          <p className='text-gray-300'>
          It allows easy tracking and movement of files across campus departments, reducing manual handovers and minimizing lost or misplaced documents. This tailored approach is crucial for educational institutions, where cross-departmental collaboration is common.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Features;
