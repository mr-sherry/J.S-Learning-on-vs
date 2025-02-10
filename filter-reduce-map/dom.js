let paragraphs = document.querySelectorAll('p')
undefined

paragraphs
NodeList(107) [p.cdx-dialog__header__subtitle, p.mw-empty-elt, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p]
paragraphs.style.display="none"

// VM951:1 Uncaught TypeError: Cannot set properties of undefined (setting 'display')
//     at <anonymous>:1:25
// (anonymous) @ VM951:1Understand this errorAI
paragraphs.style.display="none;"
// VM957:1 Uncaught TypeError: Cannot set properties of undefined (setting 'display')
//     at <anonymous>:1:25
// (anonymous) @ VM957:1Understand this errorAI


paragraphs.forEach((val)=>{
    val.style.display="none"
})
undefined


let allh=document.querySelectorAll("h3")
undefined
allh.forEach((heading)=>{
    heading.style.backgroundColor="green"
    heading.style.color="white"
    heading.style.fontWeight="bolder"
})
undefined
allh.forEach((heading)=>{
    heading.style.fontSize="30px"
})
undefined



let sidebar=document.getElementById("mw-panel-toc")
undefined
sidebar.style.display="none"
'none'



let rightsidebar=document.getElementById("vector-appearance-pinned-container")
undefined
rightsidebar.style.display="none"
'none'
let topads=document.getElementById("siteNotice")
undefined
topads.style.display="none"
'none'
document.querySelector("footer").style.display="none"
'none'



let ullist=document.querySelectorAll("ul")
undefined
ullist
// NodeList(170) [ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul#mw-panel-toc-list.vector-toc-contents, ul#toc-History-sublist.vector-toc-list, ul#toc-Creation_at_Netscape-sublist.vector-toc-list, ul#toc-Adoption_by_Microsoft-sublist.vector-toc-list, ul#toc-The_rise_of_JScript-sublist.vector-toc-list, ul#toc-Growth_and_standardization-sublist.vector-toc-list, ul#toc-Reaching_maturity-sublist.vector-toc-list, ul#toc-Trademark-sublist.vector-toc-list, ul#toc-Website_client-side_usage-sublist.vector-toc-list, ul#toc-Examples_of_scripted_behavior-sublist.vector-toc-list, ul#toc-Libraries_and_frameworks-sublist.vector-toc-list, ul#toc-Other_usage-sublist.vector-toc-list, ul#toc-Execution-sublist.vector-toc-list, ul#toc-JavaScript_engine-sublist.vector-toc-list, ul#toc-Runtime_system-sublist.vector-toc-list, ul#toc-Features-sublist.vector-toc-list, ul#toc-Imperative_and_structured-sublist.vector-toc-list, ul#toc-Weakly_typed-sublist.vector-toc-list, ul#toc-Dynamic-sublist.vector-toc-list, ul#toc-Typing-sublist.vector-toc-list, ul#toc-Run-time_evaluation-sublist.vector-toc-list, ul#toc-Object-orientation_(prototype-based)-sublist.vector-toc-list, ul#toc-Prototypes-sublist.vector-toc-list, ul#toc-Functions_as_object_constructors-sublist.vector-toc-list, ul#toc-Functions_as_methods-sublist.vector-toc-list, ul#toc-Functional-sublist.vector-toc-list, ul#toc-Lexical_closure-sublist.vector-toc-list, ul#toc-Anonymous_function-sublist.vector-toc-list, ul#toc-Delegative-sublist.vector-toc-list, ul#toc-Functions_as_roles_(Traits_and_Mixins)-sublist.vector-toc-list, ul#toc-Object_composition_and_inheritance-sublist.vector-toc-list, ul#toc-Miscellaneous-sublist.vector-toc-list, ul#toc-Zero-based_numbering-sublist.vector-toc-list, ul#toc-Variadic_functions-sublist.vector-toc-list, ul#toc-Array_and_object_literals-sublist.vector-toc-list, ul#toc-Regular_expressions-sublist.vector-toc-list, ul#toc-Promises_and_Async/await-sublist.vector-toc-list, ul#toc-Promises-sublist.vector-toc-list, ul#toc-Async/await-sublist.vector-toc-list, ul#toc-Vendor-specific_extensions-sublist.vector-toc-list, ul#toc-Syntax-sublist.vector-toc-list, ul#toc-Security-sublist.vector-toc-list, ul#toc-Cross-site_scripting-sublist.vector-toc-list, ul#toc-Cross-site_request_forgery-sublist.vector-toc-list, ul#toc-Misplaced_trust_in_the_client-sublist.vector-toc-list, ul#toc-Misplaced_trust_in_developers-sublist.vector-toc-list, ul#toc-Browser_and_plugin_coding_errors-sublist.vector-toc-list, ul#toc-Sandbox_implementation_errors-sublist.vector-toc-list, ul#toc-Hardware_vulnerabilities-sublist.vector-toc-list, ul#toc-Development_tools-sublist.vector-toc-list, ul#toc-Related_technologies-sublist.vector-toc-list, ul#toc-Java-sublist.vector-toc-list, ul#toc-JSON-sublist.vector-toc-list, ul#toc-Transpilers-sublist.vector-toc-list, ul#toc-WebAssembly-sublist.vector-toc-list, ul#toc-References-sublist.vector-toc-list, ul#toc-Sources-sublist.vector-toc-list, ul#toc-Further_reading-sublist.vector-toc-list, ul#toc-External_links-sublist.vector-toc-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul.vector-menu-content-list, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, ul, …]
ullist.forEach((ul)=>{
    ul.style.display="none"
})
undefined



let allLinks=document.querySelectorAll("a")
undefined
Array.from(allLinks)
// (1693) [a.mw-jump-link, a, a, a, a, a, a, a, a, a, a, a, a.mw-logo, a.cdx-button.cdx-button--fake-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet.cdx-…, a, a, a, a, a, a, a, a, a, a, a, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, …]
let arrLinks=Array.from(allLinks)
undefined
arrLinks.forEach((link)=>{
    link.style.display="none"
})
undefined



let table=document.querySelectorAll("tbody")
undefined
table.forEach((tbody)=>{
    tbody.style.backgroundColor="yellow"
})
undefined
table.forEach((tbody)=>{
    tbody.style.fontSize="20px"
})
undefined



let h2All=document.querySelectorAll("h2")
undefined
h2All.forEach((heading2)=>{
    heading2.innerText="Ahmed Raza Shahid"
})
undefined



// let pre=document.querySelectorAll("pre")
undefined
let pre=document.querySelector("pre")
undefined
pre.style.display="flex"
'flex'
pre.style.display="grid"
'grid'
pre.style.backgroundColor="purple"
'purple'
pre.style.color="white"
'white'



// let preSpan=document.querySelectorAll("c1")
undefined
preSpan
// NodeList []
let preSpan=document.getElementsByClassName("c1")
undefined
let preSpanArr=Array.from(preSpan)
undefined
preSpanArr.forEach((pres)=>{
    pres.style.color="white"
})
undefined




// let olList=document.querySelectorAll("ol")
undefined
let olList=document.querySelector("ol")
undefined
olList.style.backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQ-nNusVIbConk7KFewtvY3kA49dBpNOL_Q&s"
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQ-nNusVIbConk7KFewtvY3kA49dBpNOL_Q&s'
olList.style.backgroundtype="cover"
'cover'
olList.style.backgroundColor="gray"
'gray'
olList.style.paddingLeft="20px"
'20px'
olList.style.paddingLeft="40px"
'40px'
olList.style.paddingLeft="0px"
'0px'
olList.style.marginLeft="40px"
'40px'
olList.style.marginLeft="200px"
'200px'
olList.style.marginLeft="20px"
'20px'
olList.style.marginRight="200px"
'200px'