function to_digits(num){
  var result = []
  var temp = num
  while(temp > 0){
    result.push(temp%10)
    temp = Math.floor(temp/10)
  }
  return reverse(result)
}

function reverse(lst){
  var result = []
  var i = 0
  for(i = 0;i < lst.length;i++){
    result.unshift(lst[i])
  }
  return result
}

function remove_zeros(lst){
  var result = []
  var i = 0
  for(i = 0;i < lst.length;i++){
    if(lst[i] !== 0){
      result.push(lst[i])
    }
  }
  return result
}

function same_lst(lst1, lst2){
  if(lst1.length != lst2.length){
    return false
  }
  var i = 0
  for(i = 0;i < lst1.length;i++){
    if(!(lst1[i] === lst2[i])){
      return false
    }
  }
  return true
}

function palindrome_test(lst){
  return same_lst(lst,reverse(lst))
}

function monotonic_increase(lst){
  if(lst.length === 0){
    return false
  }
  var i = 0
  for(i = 1;i < lst.length;i++){
    if(lst[i-1]+1 != lst[i]){
      return false
    }
  }
  return true
}

function monotonic_decrease(lst){
  if(lst.length === 0){
    return false
  }
  var i = 0
  for(i = 1;i < lst.length;i++){
    if(lst[i-1]-1 != lst[i]){
      return false
    }
  }
  return true
}

function pairs(lst){
  if(lst.length%2 != 0){
    return false
  }
  var i = 0
  for(i = 0;i < lst.length;i+=2){
    if(lst[i] != lst[i+1]){
      return false
    }
  }
  return true
}

function triples(lst){
  if(lst.length%3 != 0){
    return false
  }
  var i = 0
  for(i = 0;i < lst.length;i+=3){
    if(lst[i] != lst[i+1] || lst[i+1] != lst[i+2]){
      return false
    }
  }
  return true
}

function nice_number(lst){
  // var temp = remove_zeros(lst)
  var temp = lst
  if(temp.length%2 != 0){
    return false
  }
  var i = 0
  for(i = 0;i < temp.length;i+=2){
    if(!(temp[i] === 6 && temp[i+1] === 9)){
      return false
    }
  }
  return true
}

function is_order(num){
  var temp = to_digits(num)
  console.log(temp)
  if(nice_number(temp) || triples(temp) ||
     pairs(temp) || monotonic_increase(temp) ||
     monotonic_decrease(temp) || palindrome_test(temp)){
       return true
     }
  return false
}

function next_order_value(min_dist=100){
  var i = 0
  var num = parseInt(document.getElementById("quantity").value)
  console.log(num)
  for(i = num+min_dist;!is_order(i);i++);
  document.getElementById('next').innerHTML = i
  return i
}

function next_order_difference(){
  var current = parseInt(document.getElementById("quantity").value)
  var num = next_order_value()
  document.getElementById('diff').innerHTML = (num-current)
  return (num-current)
}
