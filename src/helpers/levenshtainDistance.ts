


export const getLevenshteinDistance = (str1: string, str2: string):number => {
  
  const st1 = str1.trim()
  const st2 = str2.trim()


  let len1 = st1.length
  let len2 = st2.length

  let matrix = Array(len2 + 1).fill(null)

  matrix = matrix.map(() => Array(len1 + 1).fill(null))

  for (let i = 0; i <= len1; i++){
    matrix[0][i] = i
  }
  for (let i = 0; i <= len2; i++){
    matrix[i][0] = i
  }


  for (let i = 1; i <= len2; i++){
    for (let j = 1; j <= len1; j++){
      const indicator = st1[i - 1] === st2[j - 1] ? 0 : 1;

         matrix[i][j] = Math.min(
                matrix[i][j - 1] + 1,      // Costo de la inserción
                matrix[i - 1][j] + 1,      // Costo de la eliminación
                matrix[i - 1][j - 1] + indicator // Costo de la sustitución (0 si son iguales, 1 si son diferentes)
            );
    }
    
  }


  return matrix[len2][len1]

}