import { useState } from "react";
import { Search as SearchIcon, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter projects based on search and category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="w-full mx-auto px-4 py-6 sm:py-8 md:py-10 sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          Projects Portfolio
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Search projects by title or filter by category
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
        {/* Search Bar */}
        <div className="flex-1 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon
              size={20}
              className="text-secondary group-focus-within:text-bg-secondary transition-colors"
            />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search projects..."
            className="w-full pl-12 pr-4 py-3 bg-bg-buttons border-2 border-transparent rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-bg-secondary transition-all duration-200"
          />
        </div>

        {/* Category Filter */}
        <div className="relative sm:w-auto">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full sm:w-auto min-w-[180px] px-4 py-3 bg-bg-buttons border-2 border-transparent rounded-lg text-primary focus:outline-none focus:border-bg-secondary transition-all duration-200 cursor-pointer appearance-none pr-10"
          >
            <option value="all">All Projects</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="ui-ux">UI/UX Design</option>
          </select>

          {/* Custom Dropdown Arrow */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-secondary">
          Showing{" "}
          <span className="font-semibold text-primary">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-sm text-bg-secondary hover:underline cursor-pointer"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Divider */}
      <hr className="border-primary/15 mb-8" />

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="group bg-bg-buttons rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/12] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-6">
                  <button className="p-2 bg-white rounded-full hover:bg-bg-secondary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-bg-secondary hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <span className="inline-block text-xs font-medium text-bg-secondary bg-bg-secondary/10 px-3 py-1 rounded-full mb-3">
                  {project.label}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-bg-secondary transition-colors">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-bg-buttons rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchIcon size={32} className="text-secondary" />
          </div>
          <p className="text-secondary text-lg mb-2">No projects found</p>
          <p className="text-secondary text-sm">
            Try adjusting your search or filter
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;