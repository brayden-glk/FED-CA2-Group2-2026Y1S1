document.querySelectorAll(".quiz-option").forEach(option => {
    option.addEventListener("click", () => {
        const options = document.querySelectorAll(".quiz-option")
        const feedback = document.getElementById("quiz-feedback")
        options.forEach(button => button.classList.remove("border-green-500", "border-red-500", "bg-green-50", "bg-red-50"))
        if (!feedback) return
        if (option.dataset.correct === "true") {
            option.classList.add("border-green-500", "bg-green-50")
            feedback.textContent = "Correct! Kampong Gelam is linked to Sultan Mosque and Haji Lane."
            feedback.className = "mt-4 min-h-6 font-semibold text-green-700"
        } else {
            option.classList.add("border-red-500", "bg-red-50")
            feedback.textContent = "Try again. Look for the district connected to Sultan Mosque."
            feedback.className = "mt-4 min-h-6 font-semibold text-red-700"
        }
    })
})
