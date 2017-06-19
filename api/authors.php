
<?php 
	
	// get all authors

	$allUsers = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	$recUsers = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	$allResult = file_get_contents($allUsers); // get object {}

	$recResult = file_get_contents($recUsers); // get object {}

	$allResult = json_decode($allResult, true); // get the array []


    $recResult =  json_decode($recResult, true); // get the array []
    
	// echo  $allResult;

	// var_dump($allResult); 

	$result = array('all'=>$allResult, 'rec'=>$recResult); 
	// get the 2-D array [[], []]

	echo json_encode($result);  // get the object {{}, {}}
 ?>