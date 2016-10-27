const slug = (text) => text.toLowerCase()
                           .replace(/[åä]/g, 'a')    // Replace åä with a
                           .replace(/[ởö]/g, 'o')    // Replace ởö with o
                           .replace(/\s+/g, '-')     // Replace spaces with -
                           .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                           .replace(/\-\-+/g, '-')   // Replace multiple - with single -
                           .replace(/^-+/, '')       // Trim - from start of text
                           .replace(/-+$/, '');      // Trim - from end of text

export default slug;
