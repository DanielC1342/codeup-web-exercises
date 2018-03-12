# HTML and CSS notes

# Creating a git repository

1 'git init'

2 Create a new repository in github

3 Add your remote server 'git@github.com:DanielC1342/codeup-web-exercises.git'

4 The default name of the remote is always 'origin'. 'git remote add origin git@github.com:DanielC1342/codeup-web-exercises.git'

5 Commit a file, generally the first file to commit is the 'README.md' file

6 Start Tracking the changes to your 'README' file

7 'git add README.md'

8 Commit you changes: 'git commit -m "notes about the commit"'

9 Push to Github 'git push origin master'

##HTML
* **Goal** structure documents
* Main components
    - Element
        * tags (opening and, optionally, closing tags)
        * attributes
            - name, balue (key value pairs)
            - value is between quotes
            - value is optional, for instance 'checked', 'selected'
        * contents, if it's text or more elements, or both
    - Types of elements
        * Inline -> 'span', 'strong', 'em', 'input'
        * Block -> 'div', 'h1', 'ul', 'p'
        * Void -> 'br' (block), 'img' (inline), 'hr' (block) 
##CSS

* **Goal** Visual style of a page
* Main Components
    - Selector
        * selector, name
        * decleration
            * property
            * value
        * the content between the openign and closing curly brace is called a declaration block
    - Types of selectors
        * class
        * id
        * element
* Types of properties
    * color
    * fonts
    * text
    * layout
        - floats
        - positioning -> relative/absolute
    * box model
* Types of layouts
    - fixed, we use pixels
    - fluid, we use percentages
    - responsive, we use media queries