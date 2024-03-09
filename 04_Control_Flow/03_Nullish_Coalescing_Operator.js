// Nullish Coalescing Operator(??)   // null , undefined pe kaam


// acts as a safety check ki agar DB se value nhi aayi to ye assign ho jayega which is better for future execution of program


let val1 = 5 ?? 10

val1 = null ?? 15   // 15 
val1 = undefined ?? null  // null 
val1 = null ?? undefined // undefined

console.log(val1);

