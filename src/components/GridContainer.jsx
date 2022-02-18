const GridContainer = ({ className = '', children }) => {
  return (
    <div className={`grid grid-cols-11 md:grid-cols-12 gap-4 md:gap-8 ${className}`}>
      {children}
    </div>
  )
}

export default GridContainer
