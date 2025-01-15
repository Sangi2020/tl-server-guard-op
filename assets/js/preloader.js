/**
 * Preloader
 */
document.addEventListener("DOMContentLoaded", function () {
	const preloader = document.getElementById("preloader");
	const progressBar = document.querySelector(".progress-bar");
	const loadingText = document.querySelector(".loader-text");
	const minimumLoadTime = 4000; // 4 seconds minimum display time (adjust as needed)
	const startTime = Date.now();
	let progress = 0;
  
	// Update progress bar
	function updateProgress() {
	  if (progress < 90) {
		progress += Math.random() * 20;
		progress = Math.min(progress, 90);
		progressBar.style.width = progress + "%";
		loadingText.textContent = "Loading... " + Math.round(progress) + "%";
	  }
	}
  
	// Start progress updates
	const progressInterval = setInterval(updateProgress, 200);
  
	// Hide preloader function
	function hidePreloader() {
	  // Quickly complete the progress bar
	  progress = 100;
	  progressBar.style.width = "100%";
	  loadingText.textContent = "Loading... 100%";
  
	  // Clear the progress interval
	  clearInterval(progressInterval);
  
	  // Add slight delay before hiding
	  setTimeout(() => {
		preloader.classList.add("preloader-hidden");
		setTimeout(() => {
		  preloader.style.display = "none";
		}, 600);
	  }, 400);
	}
  
	// Handle page load
	window.addEventListener("load", function () {
	  const currentTime = Date.now();
	  const elapsedTime = currentTime - startTime;
  
	  // Ensure the minimum load time is respected
	  if (elapsedTime < minimumLoadTime) {
		setTimeout(hidePreloader, minimumLoadTime - elapsedTime);
	  } else {
		hidePreloader();
	  }
	});
  });
	
  /**
 *End Preloader
 */